// Blog app — root component with routing, theme, TTS engine.

const BlogApp = ({ deviceClass = 'desktop', forceTheme = null, instanceId = 'default' }) => {
  const [route, setRoute] = React.useState({ name: 'home' });
  const [theme, setTheme] = React.useState(() => {
    if (forceTheme) return forceTheme;
    try { return localStorage.getItem(`blog.theme.${instanceId}`) || 'auto'; } catch { return 'auto'; }
  });
  const scrollRef = React.useRef(null);

  // Resolve theme
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
  const isDark = theme === 'dark' || (theme === 'auto' && systemDark);

  const setThemePersist = (t) => {
    setTheme(t);
    try { localStorage.setItem(`blog.theme.${instanceId}`, t); } catch {}
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
  const ttsRef = React.useRef({ utterance: null, queue: [], idx: 0 });

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
    const voices = window.speechSynthesis.getVoices();
    const itVoice = voices.find(v => v.lang && v.lang.toLowerCase().startsWith('it'));
    if (itVoice) u.voice = itVoice;
    u.onend = () => { r.idx += 1; speakNext(); };
    u.onerror = () => { r.idx += 1; speakNext(); };
    r.utterance = u;
    setTtsState((s) => ({ ...s, section: item.section, paragraph: item.paragraph, playing: true, paused: false }));
    window.speechSynthesis.speak(u);
  }, [ttsState.speed]);

  const startChapter = (courseId, chapterId) => {
    // ↓ changed: look up by key in articles map instead of singleton article
    const article = window.BLOG_DATA.articles[`${courseId}/${chapterId}`];
    if (!article) {
      const ch = window.BLOG_DATA.courses.find(c => c.id === courseId).chapters.find(c => c.id === chapterId);
      const queue = [{ section: 0, paragraph: 0, text: `${ch.title}. Capitolo ancora in lavorazione.` }];
      const r = ttsRef.current;
      try { window.speechSynthesis && window.speechSynthesis.cancel(); } catch {}
      r.queue = queue; r.idx = 0;
      setTtsState({ active: true, playing: true, paused: false, chapterKey: `${courseId}/${chapterId}`, title: ch.title, section: 0, paragraph: 0, speed: ttsState.speed });
      setTimeout(speakNext, 60);
      return;
    }
    const queue = [];
    article.sections.forEach((s, si) => {
      queue.push({ section: si, paragraph: -1, text: s.title });
      s.paragraphs.forEach((p, pi) => queue.push({ section: si, paragraph: pi, text: p }));
    });
    const r = ttsRef.current;
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
        try { window.speechSynthesis.cancel(); } catch {}
      }
      const r = ttsRef.current;
      r.queue = []; r.idx = 0; r.utterance = null;
      setTtsState(s => ({ ...s, playing: false, paused: false, section: 0, paragraph: 0 }));
    },
    close: () => {
      if (typeof window !== 'undefined' && window.speechSynthesis) {
        try { window.speechSynthesis.cancel(); } catch {}
      }
      const r = ttsRef.current;
      r.queue = []; r.idx = 0; r.utterance = null;
      setTtsState({ active: false, playing: false, paused: false, chapterKey: null, title: '', section: 0, paragraph: 0, speed: ttsState.speed });
    },
    setSpeed: (sp) => {
      setTtsState(s => ({ ...s, speed: sp }));
      if (typeof window !== 'undefined' && window.speechSynthesis && ttsState.playing) {
        try { window.speechSynthesis.cancel(); } catch {}
        setTimeout(() => speakNext(), 60);
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
        <Nav route={route} theme={theme} setTheme={setThemePersist} navigate={navigate}/>
        <main>
          {route.name === 'home' && <HomeScreen navigate={navigate}/>}
          {route.name === 'course' && <CourseScreen courseId={route.courseId} navigate={navigate}/>}
          {route.name === 'chapter' && <ChapterScreen courseId={route.courseId} chapterId={route.chapterId} navigate={navigate} tts={tts}/>}
          {route.name === 'about' && <AboutScreen/>}
        </main>
        <Footer navigate={navigate}/>
        <TTSPlayer state={ttsState} controls={ttsControls}/>
      </div>
    </div>
  );
};

window.BlogApp = BlogApp;
