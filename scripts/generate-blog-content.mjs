import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, '..');

const ARTICLE_SOURCES = {
  'claude-101/cose-claude': 'Corso base/01_cose_claude_it.md',
  'claude-101/prima-conversazione': 'Corso base/02_prima_conversazione_it.md',
  'claude-101/risultati-migliori': 'Corso base/03_risultati_migliori_it.md',
  'claude-101/app-desktop': 'Corso base/04_app_desktop_claude_it.md',
  'claude-101/introduzione-progetti': 'Corso base/05_introduzione_progetti_it.md',
};

function normalizeInline(text) {
  return text
    .replace(/!\[([^\]]*)\]\([^)]+\)/g, '$1')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '$1 ($2)')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/__([^_]+)__/g, '$1')
    .replace(/\*([^*]+)\*/g, '$1')
    .replace(/_([^_]+)_/g, '$1')
    .replace(/【[^】]+】/g, '')
    .replace(/<[^>]+>/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function slugify(text) {
  const slug = text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
  return slug || 'panoramica';
}

function parseReadingTime(markdown) {
  const patterns = [
    /\*Tempo stimato:\s*(\d+)\s*minuti\*/i,
    /^\((\d+)\s*minuti\)$/im,
    /^Estimated time:\s*(\d+)\s*minutes?$/im,
  ];

  for (const pattern of patterns) {
    const match = markdown.match(pattern);
    if (match) return `${match[1]} min`;
  }

  return null;
}

function isReadingTimeLine(line) {
  return [
    /^\*Tempo stimato:\s*\d+\s*minuti\*$/i,
    /^\(\d+\s*minuti\)$/i,
    /^Estimated time:\s*\d+\s*minutes?$/i,
  ].some((pattern) => pattern.test(line));
}

function parseMermaidTimeline(source) {
  const lines = source
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean);

  if (!lines.length || lines[0] !== 'timeline') return null;

  let title = 'Timeline';
  const items = [];

  for (const line of lines.slice(1)) {
    const titleMatch = line.match(/^title\s+(.+)$/i);
    if (titleMatch) {
      title = normalizeInline(titleMatch[1]);
      continue;
    }

    const itemMatch = line.match(/^(.+?)\s*:\s*(.+)$/);
    if (itemMatch) {
      items.push({
        label: normalizeInline(itemMatch[1]),
        text: normalizeInline(itemMatch[2]),
      });
    }
  }

  return items.length ? { type: 'timeline', title, items } : null;
}

function markdownToSections(markdown) {
  const lines = markdown.replace(/\r\n/g, '\n').split('\n');
  const sections = [];
  const usedIds = new Set();

  let currentSection = null;
  let paragraphBuffer = [];
  let tableBuffer = [];
  let inFence = false;
  let fenceLang = '';
  let fenceBuffer = [];

  const uniqueId = (title) => {
    const base = slugify(title);
    if (!usedIds.has(base)) {
      usedIds.add(base);
      return base;
    }
    let suffix = 2;
    while (usedIds.has(`${base}-${suffix}`)) suffix += 1;
    const id = `${base}-${suffix}`;
    usedIds.add(id);
    return id;
  };

  const ensureSection = (title = 'Panoramica') => {
    if (currentSection) return currentSection;
    currentSection = { id: uniqueId(title), title, paragraphs: [], blocks: [] };
    sections.push(currentSection);
    return currentSection;
  };

  const flushParagraph = () => {
    if (!paragraphBuffer.length) return;
    const text = normalizeInline(paragraphBuffer.join(' '));
    if (text) ensureSection().paragraphs.push(text);
    paragraphBuffer = [];
  };

  const flushTable = () => {
    if (!tableBuffer.length) return;
    const section = ensureSection();
    for (const row of tableBuffer) {
      const cells = row
        .split('|')
        .map((cell) => normalizeInline(cell))
        .filter(Boolean);

      if (!cells.length) continue;
      if (cells.every((cell) => /^-+$/.test(cell.replace(/\s/g, '')))) continue;
      section.paragraphs.push(cells.join(' — '));
    }
    tableBuffer = [];
  };

  const flushFence = () => {
    if (!fenceBuffer.length) return;
    const section = ensureSection();
    if (fenceLang === 'mermaid') {
      const block = parseMermaidTimeline(fenceBuffer.join('\n'));
      if (block) {
        section.blocks.push(block);
      }
    }
    fenceBuffer = [];
    fenceLang = '';
  };

  for (const rawLine of lines) {
    const line = rawLine.trimEnd();
    const trimmed = line.trim();

    if (inFence) {
      if (trimmed.startsWith('```')) {
        inFence = false;
        flushFence();
      } else {
        fenceBuffer.push(line);
      }
      continue;
    }

    if (trimmed.startsWith('```')) {
      flushParagraph();
      flushTable();
      inFence = true;
      fenceLang = trimmed.slice(3).trim().toLowerCase();
      fenceBuffer = [];
      continue;
    }

    if (!trimmed) {
      flushParagraph();
      flushTable();
      continue;
    }

    if (/^---+$/.test(trimmed) || /^___+$/.test(trimmed) || /^__wf_reserved_/.test(trimmed)) {
      flushParagraph();
      flushTable();
      continue;
    }

    if (isReadingTimeLine(trimmed)) {
      flushParagraph();
      flushTable();
      continue;
    }

    const headingMatch = trimmed.match(/^(#{1,6})\s+(.*)$/);
    if (headingMatch) {
      flushParagraph();
      flushTable();
      const level = headingMatch[1].length;
      const title = normalizeInline(headingMatch[2]);
      if (level >= 2 && title) {
        currentSection = { id: uniqueId(title), title, paragraphs: [], blocks: [] };
        sections.push(currentSection);
      }
      continue;
    }

    if (trimmed.startsWith('|')) {
      flushParagraph();
      tableBuffer.push(trimmed);
      continue;
    }

    const bulletMatch = trimmed.match(/^[-*]\s+(.*)$/);
    if (bulletMatch) {
      flushParagraph();
      flushTable();
      const text = normalizeInline(bulletMatch[1]);
      if (text) ensureSection().paragraphs.push(text);
      continue;
    }

    const orderedMatch = trimmed.match(/^\d+\.\s+(.*)$/);
    if (orderedMatch) {
      flushParagraph();
      flushTable();
      const text = normalizeInline(orderedMatch[1]);
      if (text) ensureSection().paragraphs.push(text);
      continue;
    }

    const quoteMatch = trimmed.match(/^>\s?(.*)$/);
    if (quoteMatch) {
      paragraphBuffer.push(quoteMatch[1]);
      continue;
    }

    paragraphBuffer.push(trimmed);
  }

  flushParagraph();
  flushTable();

  return sections
    .map((section) => ({
      ...section,
      paragraphs: section.paragraphs.filter(Boolean),
      blocks: (section.blocks || []).filter(Boolean),
    }))
    .filter((section) => section.paragraphs.length || section.blocks.length);
}

function countWords(sections) {
  const chunks = [];
  for (const section of sections) {
    chunks.push(...section.paragraphs);
    for (const block of section.blocks || []) {
      if (block.type === 'timeline') {
        chunks.push(block.title);
        for (const item of block.items) {
          chunks.push(item.label, item.text);
        }
      }
    }
  }

  return chunks
    .join(' ')
    .split(/\s+/)
    .filter(Boolean).length;
}

async function buildGeneratedContent() {
  const articleContentByKey = {};
  const chapterReadingTimeByKey = {};
  const chapterSectionsByKey = {};

  for (const [key, relativePath] of Object.entries(ARTICLE_SOURCES)) {
    const filePath = path.join(repoRoot, relativePath);
    const markdown = await readFile(filePath, 'utf8');
    const sections = markdownToSections(markdown);
    const readingTime = parseReadingTime(markdown);
    const words = countWords(sections);

    articleContentByKey[key] = {
      ...(readingTime ? { readingTime } : {}),
      words,
      sections,
    };

    if (readingTime) chapterReadingTimeByKey[key] = readingTime;
    if (sections.length) chapterSectionsByKey[key] = sections.map((section) => section.title);
  }

  return {
    articleContentByKey,
    chapterReadingTimeByKey,
    chapterSectionsByKey,
  };
}

async function main() {
  const outputPath = path.join(repoRoot, 'blog-content.generated.js');
  await mkdir(path.dirname(outputPath), { recursive: true });

  const payload = await buildGeneratedContent();
  const output = `window.BLOG_GENERATED_CONTENT = ${JSON.stringify(payload, null, 2)};\n`;
  await writeFile(outputPath, output, 'utf8');

  console.log(`Generated ${path.relative(repoRoot, outputPath)}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
