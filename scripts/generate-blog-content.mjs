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

function normalizeInline(text, options = {}) {
  const { preserveLinks = false } = options;

  return text
    .replace(/!\[([^\]]*)\]\([^)]+\)/g, '$1')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, preserveLinks ? '[$1]($2)' : '$1')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/__([^_]+)__/g, '$1')
    .replace(/\*([^*]+)\*/g, '$1')
    .replace(/_([^_]+)_/g, '$1')
    .replace(/【[^】]+】/g, '')
    .replace(/<([^>\s]+)>/g, '$1')
    .replace(/\s+/g, ' ')
    .trim();
}

function plainTextInline(text) {
  return normalizeInline(text, { preserveLinks: false });
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
      title = normalizeInline(titleMatch[1], { preserveLinks: true });
      continue;
    }

    const itemMatch = line.match(/^(.+?)\s*:\s*(.+)$/);
    if (itemMatch) {
      items.push({
        label: normalizeInline(itemMatch[1], { preserveLinks: true }),
        text: normalizeInline(itemMatch[2], { preserveLinks: true }),
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
  let quoteBuffer = [];
  let tableBuffer = [];
  let listBuffer = null;
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
    currentSection = { id: uniqueId(title), title, paragraphs: [], blocks: [], content: [] };
    sections.push(currentSection);
    return currentSection;
  };

  const pushParagraph = (section, text) => {
    if (!text) return;
    const paragraphIndex = section.paragraphs.length;
    section.paragraphs.push(text);
    section.content.push({ type: 'paragraph', text, paragraphIndex });
  };

  const pushBlock = (section, block) => {
    if (!block) return;
    section.blocks.push(block);
    section.content.push(block);
  };

  const flushParagraph = () => {
    if (!paragraphBuffer.length) return;
    const text = normalizeInline(paragraphBuffer.join(' '), { preserveLinks: true });
    if (text) pushParagraph(ensureSection(), text);
    paragraphBuffer = [];
  };

  const flushQuote = () => {
    if (!quoteBuffer.length) return;
    const text = normalizeInline(quoteBuffer.join(' '), { preserveLinks: true });
    if (text) pushBlock(ensureSection(), { type: 'quote', text });
    quoteBuffer = [];
  };

  const flushTable = () => {
    if (!tableBuffer.length) return;
    const section = ensureSection();
    for (const row of tableBuffer) {
      const cells = row
        .split('|')
        .map((cell) => normalizeInline(cell, { preserveLinks: true }))
        .filter(Boolean);

      if (!cells.length) continue;
      if (cells.every((cell) => /^-+$/.test(cell.replace(/\s/g, '')))) continue;
      pushParagraph(section, cells.join(' — '));
    }
    tableBuffer = [];
  };

  const flushList = () => {
    if (!listBuffer || !listBuffer.items.length) return;
    pushBlock(ensureSection(), listBuffer);
    listBuffer = null;
  };

  const flushFence = () => {
    if (!fenceBuffer.length) return;
    const section = ensureSection();
    if (fenceLang === 'mermaid') {
      const block = parseMermaidTimeline(fenceBuffer.join('\n'));
      if (block) {
        pushBlock(section, block);
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
      flushQuote();
      flushTable();
      flushList();
      inFence = true;
      fenceLang = trimmed.slice(3).trim().toLowerCase();
      fenceBuffer = [];
      continue;
    }

    if (!trimmed) {
      flushParagraph();
      flushQuote();
      flushTable();
      flushList();
      continue;
    }

    if (/^---+$/.test(trimmed) || /^___+$/.test(trimmed) || /^__wf_reserved_/.test(trimmed)) {
      flushParagraph();
      flushQuote();
      flushTable();
      flushList();
      continue;
    }

    if (isReadingTimeLine(trimmed)) {
      flushParagraph();
      flushQuote();
      flushTable();
      flushList();
      continue;
    }

    const headingMatch = trimmed.match(/^(#{1,6})\s+(.*)$/);
    if (headingMatch) {
      flushParagraph();
      flushQuote();
      flushTable();
      flushList();
      const level = headingMatch[1].length;
      const title = normalizeInline(headingMatch[2], { preserveLinks: true });
      if (level >= 2 && title) {
        currentSection = { id: uniqueId(title), title, paragraphs: [], blocks: [], content: [] };
        sections.push(currentSection);
      }
      continue;
    }

    if (trimmed.startsWith('|')) {
      flushParagraph();
      flushQuote();
      flushList();
      tableBuffer.push(trimmed);
      continue;
    }

    const bulletMatch = trimmed.match(/^[-*]\s+(.*)$/);
    if (bulletMatch) {
      flushParagraph();
      flushQuote();
      flushTable();
      const text = normalizeInline(bulletMatch[1], { preserveLinks: true });
      if (!text) continue;
      if (!listBuffer || listBuffer.type !== 'list' || listBuffer.ordered) {
        flushList();
        listBuffer = { type: 'list', ordered: false, items: [] };
      }
      listBuffer.items.push(text);
      continue;
    }

    const orderedMatch = trimmed.match(/^\d+\.\s+(.*)$/);
    if (orderedMatch) {
      flushParagraph();
      flushQuote();
      flushTable();
      const text = normalizeInline(orderedMatch[1], { preserveLinks: true });
      if (!text) continue;
      if (!listBuffer || listBuffer.type !== 'list' || !listBuffer.ordered) {
        flushList();
        listBuffer = { type: 'list', ordered: true, items: [] };
      }
      listBuffer.items.push(text);
      continue;
    }

    flushList();
    const quoteMatch = trimmed.match(/^>\s?(.*)$/);
    if (quoteMatch) {
      flushParagraph();
      flushTable();
      quoteBuffer.push(quoteMatch[1]);
      continue;
    }

    flushQuote();
    paragraphBuffer.push(trimmed);
  }

  flushParagraph();
  flushQuote();
  flushTable();
  flushList();

  return sections
    .map((section) => ({
      ...section,
      paragraphs: section.paragraphs.filter(Boolean),
      blocks: (section.blocks || []).filter(Boolean),
      content: (section.content || []).filter(Boolean),
    }))
    .filter((section) => section.paragraphs.length || section.blocks.length || section.content.length);
}

function countWords(sections) {
  const chunks = [];
  for (const section of sections) {
    const content = Array.isArray(section.content) && section.content.length
      ? section.content
      : [
          ...(section.paragraphs || []).map((text) => ({ type: 'paragraph', text })),
          ...(section.blocks || []),
        ];
    for (const block of content) {
      if (block.type === 'paragraph') {
        chunks.push(plainTextInline(block.text));
      }
      if (block.type === 'quote') {
        chunks.push(plainTextInline(block.text));
      }
      if (block.type === 'timeline') {
        chunks.push(plainTextInline(block.title));
        for (const item of block.items) {
          chunks.push(plainTextInline(item.label), plainTextInline(item.text));
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
