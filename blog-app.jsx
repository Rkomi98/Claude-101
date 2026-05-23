// Blog app — root component with routing, theme, TTS engine.

const AUTO_TTS_VOICE = '__auto__';

function normalizeSpeechText(text = '') {
  return String(text)
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '$1')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/__([^_]+)__/g, '$1')
    .replace(/\*([^*]+)\*/g, '$1')
    .replace(/_([^_]+)_/g, '$1')
    .replace(/\s+/g, ' ')
    .trim();
}

function withSentencePause(text = '') {
  const normalized = normalizeSpeechText(text);
  if (!normalized) return '';
  return /[.!?:;…]$/.test(normalized) ? normalized : `${normalized}.`;
}

function scoreNarrationVoice(voice) {
  const name = `${voice?.name || ''} ${voice?.voiceURI || ''}`.toLowerCase();
  const lang = (voice?.lang || '').toLowerCase();
  let score = 0;

  if (lang.startsWith('it')) score += 400;
  else if (lang.startsWith('en')) score += 40;

  if (voice?.default) score += 20;
  if (voice?.localService) score += 10;

  if (/natural|neural|wavenet|premium|enhanced|studio|expressive/.test(name)) score += 180;
  if (/google|siri|eloquence/.test(name)) score += 70;
  if (/luca|alice|federica|elsa|cosimo/.test(name)) score += 110;
  if (/compact|classic/.test(name)) score -= 25;

  return score;
}

function sortNarrationVoices(voices = []) {
  return [...voices].sort((a, b) => {
    const scoreDiff = scoreNarrationVoice(b) - scoreNarrationVoice(a);
    if (scoreDiff) return scoreDiff;
    return `${a.name} ${a.lang}`.localeCompare(`${b.name} ${b.lang}`, 'it');
  });
}

function pickNarrationVoice(voices = [], preferredVoice = '') {
  if (!voices.length) return null;
  if (preferredVoice) {
    const match = voices.find((voice) => voice.name === preferredVoice);
    if (match) return match;
  }
  return sortNarrationVoices(voices)[0] || null;
}

function blockToSpeechQueue(block, sectionIndex, sectionTitle) {
  if (!block) return [];

  if (block.type === 'list') {
    const intro = block.title && block.title !== sectionTitle
      ? withSentencePause(block.title)
      : block.ordered ? 'Elenco numerato.' : 'Elenco puntato.';
    const itemLabel = block.ordered ? 'Passo' : 'Punto';
    const items = (block.items || [])
      .map((item, index) => withSentencePause(`${itemLabel} ${index + 1}. ${item}`))
      .filter(Boolean)
      .map((text) => ({ section: sectionIndex, paragraph: -1, text }));
    return [{ section: sectionIndex, paragraph: -1, text: intro }, ...items].filter((item) => item.text);
  }

  if (block.type === 'timeline') {
    const intro = block.title && block.title !== sectionTitle ? withSentencePause(block.title) : '';
    const items = (block.items || [])
      .map((item, index) => {
        const label = withSentencePause(item.label || `Tappa ${index + 1}`);
        const description = normalizeSpeechText(item.text || '');
        return withSentencePause(`Tappa ${index + 1}. ${label} ${description}`);
      })
      .filter(Boolean)
      .map((text) => ({ section: sectionIndex, paragraph: -1, text }));
    return [
      intro ? { section: sectionIndex, paragraph: -1, text: intro } : null,
      ...items,
    ].filter(Boolean);
  }

  if (block.type === 'quote') {
    return [{
      section: sectionIndex,
      paragraph: -1,
      text: withSentencePause(block.text),
    }].filter((item) => item.text);
  }

  return [];
}

function buildArticleSpeechQueue(article) {
  if (!article) return [];

  const queue = [];
  article.sections.forEach((section, sectionIndex) => {
    queue.push({ section: sectionIndex, paragraph: -1, text: withSentencePause(section.title) });
    (section.paragraphs || []).forEach((paragraph, paragraphIndex) => {
      queue.push({
        section: sectionIndex,
        paragraph: paragraphIndex,
        text: withSentencePause(paragraph),
      });
    });
    (section.blocks || []).forEach((block) => {
      queue.push(...blockToSpeechQueue(block, sectionIndex, section.title));
    });
  });

  return queue.filter((item) => item.text);
}

const BlogApp = ({ deviceClass = 'desktop', forceTheme = null, instanceId = 'default' }) => {
  const [route, setRoute] = React.useState({ name: 'home' });
  const voiceStorageKey = `blog.tts.voice.${instanceId}`;
  const themeStorageKey = `blog.theme.${instanceId}`;
  const [themePreference, setThemePreference] = React.useState(() => {
    if (forceTheme === 'light' || forceTheme === 'dark') return forceTheme;
    try {
      const storedTheme = localStorage.getItem(themeStorageKey);
      return storedTheme === 'light' || storedTheme === 'dark' ? storedTheme : null;
    } catch {
      return null;
    }
  });
  const scrollRef = React.useRef(null);

  // Resolve theme: follow the system until the user explicitly picks a mode.
  const [systemDark, setSystemDark] = React.useState(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });
  React.useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const cb = (e) => setSystemDark(e.matches);
    try { mq.addEventListener('change', cb); } catch { mq.addListener(cb); }
    return () => { try { mq.removeEventListener('change', cb); } catch { mq.removeListener(cb); } };
  }, []);
  const isDark = themePreference ? themePreference === 'dark' : systemDark;

  const setThemePersist = (t) => {
    setThemePreference(t);
    try { localStorage.setItem(themeStorageKey, t); } catch {}
  };

  const navigate = (r) => {
    setRoute(r);
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
  };

  // ─── TTS engine ────────────────────────────────────────────
  const [ttsState, setTtsState] = React.useState({
    active: false, playing: false, paused: false,
    chapterKey: null, title: '', section: 0, paragraph: 0,
    speed: 1,
  });
  const [availableVoices, setAvailableVoices] = React.useState([]);
  const [selectedVoice, setSelectedVoice] = React.useState(() => {
    try { return localStorage.getItem(voiceStorageKey) || ''; } catch { return ''; }
  });
  const ttsRef = React.useRef({ utterance: null, queue: [], idx: 0, cancelReason: null });
  const narratorVoice = React.useMemo(
    () => pickNarrationVoice(availableVoices, selectedVoice),
    [availableVoices, selectedVoice]
  );

  React.useEffect(() => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return;
    const synth = window.speechSynthesis;

    const syncVoices = () => {
      setAvailableVoices(sortNarrationVoices(synth.getVoices()));
    };

    syncVoices();
    try {
      synth.addEventListener('voiceschanged', syncVoices);
      return () => synth.removeEventListener('voiceschanged', syncVoices);
    } catch {
      const previous = synth.onvoiceschanged;
      synth.onvoiceschanged = syncVoices;
      return () => {
        if (synth.onvoiceschanged === syncVoices) synth.onvoiceschanged = previous || null;
      };
    }
  }, []);

  const speakNext = React.useCallback(() => {
    const r = ttsRef.current;
    if (r.idx >= r.queue.length) {
      setTtsState((s) => ({ ...s, playing: false, paused: false, active: false }));
      return;
    }
    const item = r.queue[r.idx];
    if (typeof window === 'undefined' || !window.speechSynthesis) {
      setTtsState((s) => ({ ...s, section: item.section, paragraph: item.paragraph }));
      setTimeout(() => { r.idx += 1; speakNext(); }, 2000);
      return;
    }
    const u = new SpeechSynthesisUtterance(item.text);
    u.lang = 'it-IT';
    u.rate = ttsState.speed;
    u.pitch = 1;
    if (narratorVoice) {
      u.voice = narratorVoice;
      u.lang = narratorVoice.lang || 'it-IT';
    }
    u.onend = () => {
      r.utterance = null;
      if (r.cancelReason) {
        r.cancelReason = null;
        return;
      }
      r.idx += 1;
      speakNext();
    };
    u.onerror = () => {
      r.utterance = null;
      if (r.cancelReason) {
        r.cancelReason = null;
        return;
      }
      r.idx += 1;
      speakNext();
    };
    r.utterance = u;
    setTtsState((s) => ({ ...s, section: item.section, paragraph: item.paragraph, playing: true, paused: false }));
    window.speechSynthesis.speak(u);
  }, [narratorVoice, ttsState.speed]);

  const restartCurrentUtterance = React.useCallback(() => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return;
    const r = ttsRef.current;
    r.cancelReason = 'restart';
    try { window.speechSynthesis.cancel(); } catch {}
    setTimeout(() => speakNext(), 60);
  }, [speakNext]);

  const startChapter = (courseId, chapterId) => {
    // ↓ changed: look up by key in articles map instead of singleton article
    const article = window.BLOG_DATA.articles[`${courseId}/${chapterId}`];
    if (!article) {
      const ch = window.BLOG_DATA.courses.find(c => c.id === courseId).chapters.find(c => c.id === chapterId);
      const queue = [{ section: 0, paragraph: 0, text: `${ch.title}. Capitolo ancora in lavorazione.` }];
      const r = ttsRef.current;
      r.cancelReason = 'replace';
      try { window.speechSynthesis && window.speechSynthesis.cancel(); } catch {}
      r.queue = queue; r.idx = 0;
      setTtsState({ active: true, playing: true, paused: false, chapterKey: `${courseId}/${chapterId}`, title: ch.title, section: 0, paragraph: 0, speed: ttsState.speed });
      setTimeout(speakNext, 60);
      return;
    }
    const queue = buildArticleSpeechQueue(article);
    const r = ttsRef.current;
    r.cancelReason = 'replace';
    try { window.speechSynthesis && window.speechSynthesis.cancel(); } catch {}
    r.queue = queue; r.idx = 0;
    setTtsState({ active: true, playing: true, paused: false, chapterKey: `${courseId}/${chapterId}`, title: article.title, section: 0, paragraph: 0, speed: ttsState.speed });
    setTimeout(speakNext, 60);
  };

  const ttsControls = {
    play: () => {
      if (typeof window === 'undefined' || !window.speechSynthesis) return;
      if (ttsState.paused) {
        window.speechSynthesis.resume();
        setTtsState(s => ({ ...s, playing: true, paused: false }));
      } else if (!ttsState.playing) {
        speakNext();
      }
    },
    pause: () => {
      if (typeof window === 'undefined' || !window.speechSynthesis) return;
      window.speechSynthesis.pause();
      setTtsState(s => ({ ...s, playing: false, paused: true }));
    },
    stop: () => {
      if (typeof window !== 'undefined' && window.speechSynthesis) {
        ttsRef.current.cancelReason = 'stop';
        try { window.speechSynthesis.cancel(); } catch {}
      }
      const r = ttsRef.current;
      r.queue = []; r.idx = 0; r.utterance = null;
      setTtsState(s => ({ ...s, playing: false, paused: false, section: 0, paragraph: 0 }));
    },
    close: () => {
      if (typeof window !== 'undefined' && window.speechSynthesis) {
        ttsRef.current.cancelReason = 'close';
        try { window.speechSynthesis.cancel(); } catch {}
      }
      const r = ttsRef.current;
      r.queue = []; r.idx = 0; r.utterance = null;
      setTtsState({ active: false, playing: false, paused: false, chapterKey: null, title: '', section: 0, paragraph: 0, speed: ttsState.speed });
    },
    setSpeed: (sp) => {
      setTtsState(s => ({ ...s, speed: sp }));
      if (typeof window !== 'undefined' && window.speechSynthesis && ttsState.playing) {
        restartCurrentUtterance();
      }
    },
    setVoice: (voiceName) => {
      const nextVoice = voiceName === AUTO_TTS_VOICE ? '' : voiceName;
      setSelectedVoice(nextVoice);
      try {
        if (nextVoice) localStorage.setItem(voiceStorageKey, nextVoice);
        else localStorage.removeItem(voiceStorageKey);
      } catch {}
      if (typeof window !== 'undefined' && window.speechSynthesis && ttsState.playing) {
        restartCurrentUtterance();
      }
    },
  };

  React.useEffect(() => () => {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      try { window.speechSynthesis.cancel(); } catch {}
    }
  }, []);

  const tts = { state: ttsState, startChapter, ...ttsControls };

  return (
    <div
      className={`blog ${isDark ? 'dark' : ''} ${deviceClass}`}
      style={{ minHeight: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}
    >
      <div ref={scrollRef} className="blog-scroll" style={{ flex: 1, position: 'relative' }}>
        <ReadingProgress scrollRef={scrollRef}/>
        <AttributionBanner/>
        <Nav route={route} isDark={isDark} setTheme={setThemePersist} navigate={navigate}/>
        <main>
          {route.name === 'home' && <HomeScreen navigate={navigate}/>}
          {route.name === 'course' && <CourseScreen courseId={route.courseId} navigate={navigate}/>}
          {route.name === 'chapter' && <ChapterScreen courseId={route.courseId} chapterId={route.chapterId} navigate={navigate} tts={tts}/>}
          {route.name === 'about' && <AboutScreen/>}
        </main>
        <Footer navigate={navigate}/>
        <TTSPlayer
          state={ttsState}
          controls={ttsControls}
          voices={availableVoices}
          selectedVoice={selectedVoice}
          effectiveVoice={narratorVoice}
        />
      </div>
    </div>
  );
};

window.BlogApp = BlogApp;
