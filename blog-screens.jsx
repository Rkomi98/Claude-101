// Blog screens — Home, Course detail, Chapter reading, About
// Plus floating TTS player + theme toggle button.

const { useState, useEffect, useRef, useMemo, useCallback } = React;

// ─── Tiny icons ─────────────────────────────────────────────────
const Icon = {
  arrow: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 6l6 6-6 6"/>
    </svg>
  ),
  sun: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>
    </svg>
  ),
  moon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  ),
  auto: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9"/><path d="M12 3v18"/><path d="M12 3a9 9 0 0 0 0 18z" fill="currentColor"/>
    </svg>
  ),
  play: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 4l14 8L7 20z"/></svg>,
  pause: <svg viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>,
  stop: <svg viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="6" width="12" height="12"/></svg>,
  close: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M6 6l12 12M18 6L6 18"/>
    </svg>
  ),
  bookmark: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
    </svg>
  ),
  bookmarkFill: (
    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
  ),
  note: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M9 13h6M9 17h4"/>
    </svg>
  ),
  menu: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
      <path d="M4 6h16M4 12h16M4 18h16"/>
    </svg>
  ),
  chevron: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 9l6 6 6-6"/>
    </svg>
  ),
  speaker: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 5L6 9H2v6h4l5 4V5z"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
    </svg>
  ),
};

// ─── Attribution banner ─────────────────────────────────────────
function AttributionBanner() {
  return (
    <div className="attribution-banner">
      <span className="full">Contenuti tradotti e adattati dai corsi pubblici di <b>Claude · Anthropic</b> — progetto editoriale indipendente</span>
      <span className="short">Tradotto dai corsi di <b>Claude · Anthropic</b> — indipendente</span>
    </div>
  );
}

// ─── Reading progress bar ───────────────────────────────────────
function ReadingProgress({ scrollRef }) {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => {
      const max = el.scrollHeight - el.clientHeight;
      setPct(max > 0 ? Math.min(1, el.scrollTop / max) : 0);
    };
    el.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => el.removeEventListener('scroll', onScroll);
  }, [scrollRef]);
  return (
    <div className="blog__progress" aria-hidden="true">
      <div style={{ width: `${pct * 100}%` }} />
    </div>
  );
}

// ─── Header / Nav ───────────────────────────────────────────────
function Nav({ route, theme, setTheme, navigate }) {
  const cycleTheme = () => {
    const order = ['auto', 'light', 'dark'];
    const next = order[(order.indexOf(theme) + 1) % order.length];
    setTheme(next);
  };
  return (
    <header className="nav">
      <div className="nav__row">
        <div className="nav__brand" onClick={() => navigate({ name: 'home' })}>
          <span className="mark"/>
          <span>Quaderno</span>
          <span className="ital">— i corsi di Claude</span>
        </div>
        <nav className="nav__links">
          <a className={route.name === 'home' ? 'active' : ''} onClick={() => navigate({ name: 'home' })}>Corsi</a>
          <a className={route.name === 'about' ? 'active' : ''} onClick={() => navigate({ name: 'about' })}>Su questo blog</a>
          <button className="icon-btn" onClick={cycleTheme} title={`Tema: ${theme}`}>
            {theme === 'light' ? Icon.sun : theme === 'dark' ? Icon.moon : Icon.auto}
          </button>
        </nav>
      </div>
    </header>
  );
}

// ─── Home / catalogue ───────────────────────────────────────────
function HomeScreen({ navigate }) {
  const { courses } = window.BLOG_DATA;
  return (
    <>
      <section className="hero">
        <div className="hero__kicker">Vol. 01 · Edizione italiana</div>
        <h1 className="hero__title">
          I corsi di Claude,<br/>
          <em>letti come un libro.</em>
        </h1>
        <p className="hero__lede">
          Traduzioni e appunti dai materiali didattici pubblici di Anthropic, riorganizzati
          in capitoli e sezioni, ottimizzati per la lettura — anche ad alta voce.
        </p>
        <div className="hero__meta">
          <div><b>{courses.length}</b> corsi</div>
          <div><b>{courses.reduce((n, c) => n + c.chapters.length, 0)}</b> capitoli</div>
          <div><b>10h 00m</b> di lettura</div>
          <div>aggiornato <b>19 mag 2026</b></div>
        </div>
      </section>

      <div className="section-head">
        <h2>Catalogo</h2>
        <div className="count">4 corsi · 17 capitoli</div>
      </div>

      <div className="courses">
        {courses.map((c) => (
          <article key={c.id} className="course-card" onClick={() => navigate({ name: 'course', courseId: c.id })}>
            <div className="course-card__num">CORSO · {c.num}</div>
            <h3 className="course-card__title">
              {c.title} <em>· {c.titleEm}</em>
            </h3>
            <p className="course-card__desc">{c.desc}</p>
            <div className="course-card__meta">
              <span><b>{c.chapters.length}</b> cap.</span>
              <span><b>{c.hours}</b></span>
              <span>{c.level}</span>
            </div>
            <div className="course-card__arrow">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <path d="M7 17L17 7M9 7h8v8"/>
              </svg>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}

// ─── Course detail ──────────────────────────────────────────────
function CourseScreen({ courseId, navigate }) {
  const course = window.BLOG_DATA.courses.find(c => c.id === courseId);
  if (!course) return null;
  return (
    <section className="course-detail">
      <div className="crumbs">
        <a onClick={() => navigate({ name: 'home' })}>Corsi</a>
        <span className="sep">/</span>
        <span className="here">{course.title}</span>
      </div>
      <h1 className="course-detail__title">
        {course.title} <em>— {course.titleEm}</em>
      </h1>
      <p className="course-detail__lede">{course.desc}</p>
      <div className="course-detail__stats">
        <div><b>{course.chapters.length}</b> capitoli</div>
        <div><b>{course.hours}</b> stimati</div>
        <div>livello <b>{course.level}</b></div>
        <div>lingua <b>italiano</b></div>
      </div>

      <div className="course-disclaimer">
        <b>Materiale di origine.</b> Le pagine di questo corso sono traduzioni e
        riassunti dei materiali didattici pubblici di Claude (Anthropic). Per la versione
        originale, in inglese, fa fede il corso ospitato sui canali ufficiali Anthropic.
      </div>

      <div className="chapter-list">
        {course.chapters.map((ch, i) => (
          <div
            key={ch.id}
            className="chapter-row"
            onClick={() => ch.available !== false && navigate({ name: 'chapter', courseId: course.id, chapterId: ch.id })}
            style={ch.available === false ? { opacity: 0.6, cursor: 'not-allowed' } : null}
          >
            <div className="chapter-row__num">CAP {ch.num}</div>
            <div>
              <h3 className="chapter-row__title">{ch.title}</h3>
              <p className="chapter-row__desc">{ch.desc}</p>
              <div className="chapter-row__sections">
                {ch.sections.map((s, j) => <span key={j}>{s}</span>)}
              </div>
            </div>
            <div className="chapter-row__meta">
              {ch.available === false ? 'in arrivo' : `${ch.readingTime} di lettura`}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── About ──────────────────────────────────────────────────────
function AboutScreen() {
  return (
    <section className="about">
      <div className="crumbs"><span className="here">Su questo blog</span></div>
      <h1>Un quaderno editoriale<br/><em style={{fontStyle:'italic', color:'var(--accent)', fontWeight:300}}>per chi vuole leggere, non guardare.</em></h1>
      <div className="prose">
        <p>
          <b>Quaderno</b> è una raccolta indipendente di traduzioni e appunti tratti
          dai corsi pubblicamente disponibili di Claude, l'assistente di Anthropic.
          Non è affiliato ad Anthropic, non è un materiale ufficiale e non sostituisce
          le risorse pubblicate sui canali del produttore.
        </p>
        <div className="about__disclaimer">
          <div className="label">Attribuzione</div>
          <div>
            Tutti i contenuti didattici qui presenti sono adattamenti in lingua
            italiana dei corsi <i>Claude 101</i>, <i>Claude Code 101</i>,
            <i> Introduction to Claude Cowork</i> e <i>Claude Code in Action</i>,
            pubblicati e mantenuti da <b>Anthropic</b>. I marchi <i>Claude</i> e
            <i> Anthropic</i> appartengono ai rispettivi titolari. Ogni capitolo
            riporta in apertura un riferimento all'originale.
          </div>
        </div>
        <h2 style={{fontFamily:'var(--serif)', fontSize:24, marginTop:32, marginBottom:12, fontWeight:400}}>Perché un'edizione italiana</h2>
        <p>
          I materiali originali sono in inglese e ottimizzati per il consumo in video
          o documentazione tecnica. Questo blog li rilegge in chiave editoriale:
          capitoli scritti, sezioni numerate, larghezza di colonna pensata per gli
          occhi, e una funzione di lettura ad alta voce per chi preferisce ascoltare.
        </p>
        <h2 style={{fontFamily:'var(--serif)', fontSize:24, marginTop:32, marginBottom:12, fontWeight:400}}>Lettura automatica</h2>
        <p>
          Ogni capitolo è strutturato in paragrafi indipendenti, in modo che il
          browser — o un futuro player integrato — possa leggerli ad alta
          voce uno alla volta, con possibilità di mettere in pausa, regolare la
          velocità o riprendere da dove si era interrotto. Funziona nativamente su
          Chrome, Edge e Safari grazie alla Web Speech API.
        </p>
        <h2 style={{fontFamily:'var(--serif)', fontSize:24, marginTop:32, marginBottom:12, fontWeight:400}}>Segnalazioni</h2>
        <p>
          Se trovi un errore di traduzione, una sezione poco chiara o un passaggio
          che vorresti vedere ampliato, le segnalazioni sono benvenute.
        </p>
      </div>
    </section>
  );
}

function TimelineBlock({ title, items = [] }) {
  return (
    <div className="roadmap-block">
      <div className="roadmap-block__eyebrow">{title}</div>
      <div className="roadmap-block__list">
        {items.map((item, index) => (
          <div key={`${item.label}-${index}`} className="roadmap-step">
            <div className="roadmap-step__rail" aria-hidden="true">
              <span className="roadmap-step__dot"/>
              {index < items.length - 1 && <span className="roadmap-step__line"/>}
            </div>
            <div className="roadmap-step__body">
              <div className="roadmap-step__label">{item.label}</div>
              <p className="roadmap-step__text">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ArticleBlock({ block }) {
  if (!block) return null;
  if (block.type === 'timeline') {
    return <TimelineBlock title={block.title} items={block.items} />;
  }
  return null;
}

// ─── Floating TTS player ────────────────────────────────────────
function TTSPlayer({ state, controls }) {
  if (!state.active) return null;
  const speeds = [0.75, 1, 1.25, 1.5, 2];
  const nextSpeed = () => {
    const i = speeds.indexOf(state.speed);
    controls.setSpeed(speeds[(i + 1) % speeds.length]);
  };
  return (
    <div className="tts-player">
      <div style={{ width: 28, height: 28, display:'flex', alignItems:'center', justifyContent:'center', color:'var(--accent)' }}>
        {Icon.speaker}
      </div>
      <div style={{ minWidth: 0 }}>
        <div className="tts-player__title">{state.title}</div>
        <div className="tts-player__sub">
          {state.playing ? `In ascolto · § ${state.section + 1}` : state.paused ? 'In pausa' : 'Pronto'}
        </div>
      </div>
      <div className="tts-divider"/>
      <button className="tts-speed" onClick={nextSpeed} title="Velocità">{state.speed}×</button>
      <button className="tts-btn" onClick={state.playing ? controls.pause : controls.play} title={state.playing ? 'Pausa' : 'Play'}>
        {state.playing ? Icon.pause : Icon.play}
      </button>
      <button className="tts-btn tts-btn--ghost" onClick={controls.stop} title="Stop">{Icon.stop}</button>
      <button className="tts-btn tts-btn--ghost" onClick={controls.close} title="Chiudi">{Icon.close}</button>
    </div>
  );
}

// ─── Chapter / Reading view ─────────────────────────────────────
function ChapterScreen({ courseId, chapterId, navigate, tts }) {
  const course = window.BLOG_DATA.courses.find(c => c.id === courseId);
  // ↓ changed: look up article by key instead of checking the singleton
  const article = window.BLOG_DATA.articles[`${courseId}/${chapterId}`] || null;
  const chapterIdx = course.chapters.findIndex(c => c.id === chapterId);
  const chapter = course.chapters[chapterIdx];
  const prev = course.chapters[chapterIdx - 1];
  const next = course.chapters[chapterIdx + 1];

  const [bookmarked, setBookmarked] = useState(() => {
    try { return (JSON.parse(localStorage.getItem('blog.bookmarks') || '[]')).includes(`${courseId}/${chapterId}`); } catch { return false; }
  });
  const [note, setNote] = useState(() => {
    try { return (JSON.parse(localStorage.getItem('blog.notes') || '{}'))[`${courseId}/${chapterId}`] || ''; } catch { return ''; }
  });
  const [showNote, setShowNote] = useState(!!note);
  const [tocOpen, setTocOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  const toggleBookmark = () => {
    try {
      const key = `${courseId}/${chapterId}`;
      const arr = JSON.parse(localStorage.getItem('blog.bookmarks') || '[]');
      const has = arr.includes(key);
      const next = has ? arr.filter(x => x !== key) : [...arr, key];
      localStorage.setItem('blog.bookmarks', JSON.stringify(next));
      setBookmarked(!has);
    } catch {}
  };

  const updateNote = (v) => {
    setNote(v);
    try {
      const all = JSON.parse(localStorage.getItem('blog.notes') || '{}');
      all[`${courseId}/${chapterId}`] = v;
      localStorage.setItem('blog.notes', JSON.stringify(all));
    } catch {}
  };

  // Observe section visibility for active TOC link
  const sectionRefs = useRef({});
  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return;
    const obs = new IntersectionObserver((entries) => {
      const visible = entries.filter(e => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
      if (visible[0]) setActiveSection(visible[0].target.id);
    }, { rootMargin: '-80px 0px -60% 0px' });
    Object.values(sectionRefs.current).forEach(el => el && obs.observe(el));
    return () => obs.disconnect();
  }, [chapterId]);

  // ↓ changed: article exists → show full content
  const hasFullContent = !!article;

  return (
    <div className="chapter-layout">
      {/* TOC sidebar */}
      <aside className="toc">
        <button className="toc__toggle" onClick={() => setTocOpen(o => !o)}>
          <span>Indice — {course.title}</span>
          <span style={{ transform: tocOpen ? 'rotate(180deg)' : 'none', transition: 'transform .2s' }}>{Icon.chevron}</span>
        </button>
        <div className={`toc__inner ${tocOpen ? '' : 'collapsed'}`}>
          <div className="toc__label">In questo corso</div>
          <div className="toc__course">{course.title}</div>
          <div className="toc__chapters">
            {course.chapters.map((ch) => {
              const isCurrent = ch.id === chapterId;
              return (
                <React.Fragment key={ch.id}>
                  <div
                    className={`toc__chap ${isCurrent ? 'current' : ''}`}
                    onClick={() => navigate({ name: 'chapter', courseId, chapterId: ch.id })}
                  >
                    {ch.num}. {ch.title}
                  </div>
                  {isCurrent && hasFullContent && (
                    <div className="toc__sections">
                      {article.sections.map((s) => (
                        <div
                          key={s.id}
                          className={`toc__section ${activeSection === s.id ? 'current' : ''}`}
                          onClick={() => document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                        >
                          {s.title}
                        </div>
                      ))}
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </aside>

      {/* Article */}
      <article className="chapter-article">
        <div className="crumbs">
          <a onClick={() => navigate({ name: 'home' })}>Corsi</a>
          <span className="sep">/</span>
          <a onClick={() => navigate({ name: 'course', courseId })}>{course.title}</a>
          <span className="sep">/</span>
          <span className="here">Cap. {chapter.num}</span>
        </div>

        <div className="chapter-article__kicker">Capitolo {chapter.num} · {course.title}</div>
        <h1 className="chapter-article__title">
          {hasFullContent ? article.title : chapter.title}
        </h1>
        {hasFullContent && <p className="chapter-article__lede">{article.lede}</p>}

        <div className="chapter-article__meta">
          <span><b>{hasFullContent ? article.readingTime : chapter.readingTime}</b> di lettura</span>
          {hasFullContent && <span><b>{article.words}</b> parole</span>}
          {hasFullContent && <span>aggiornato {article.updated}</span>}
          <span className="spacer"/>
          <button
            className={tts.state.active && tts.state.chapterKey === `${courseId}/${chapterId}` ? 'active' : ''}
            onClick={() => tts.startChapter(courseId, chapterId)}
          >
            <span style={{width:12,height:12,display:'inline-flex'}}>{Icon.speaker}</span>
            {tts.state.active && tts.state.chapterKey === `${courseId}/${chapterId}` ? 'In ascolto' : 'Ascolta'}
          </button>
          <button onClick={toggleBookmark} className={bookmarked ? 'active' : ''}>
            <span style={{width:12,height:12,display:'inline-flex'}}>{bookmarked ? Icon.bookmarkFill : Icon.bookmark}</span>
            {bookmarked ? 'Salvato' : 'Salva'}
          </button>
          <button onClick={() => setShowNote(o => !o)} className={showNote ? 'active' : ''}>
            <span style={{width:12,height:12,display:'inline-flex'}}>{Icon.note}</span>
            Nota
          </button>
        </div>

        <div className="chapter-disclaimer">
          Capitolo tradotto e adattato dal corso <b>{course.title}</b> di Claude (Anthropic).
          Il testo originale è disponibile sui canali ufficiali Anthropic.
        </div>

        {showNote && (
          <div className="note-panel">
            <div className="note-panel__label">
              <span style={{width:12,height:12,display:'inline-flex'}}>{Icon.note}</span>
              Le tue note · {chapter.title}
            </div>
            <textarea
              placeholder="Appunti personali su questo capitolo… (salvati nel tuo browser)"
              value={note}
              onChange={(e) => updateNote(e.target.value)}
            />
          </div>
        )}

        {hasFullContent ? (
          <div className="prose">
            {article.sections.map((s, si) => (
              <section
                key={s.id}
                id={s.id}
                ref={(el) => (sectionRefs.current[s.id] = el)}
              >
                <h2>{s.title}</h2>
                {s.paragraphs.map((p, pi) => (
                  <p
                    key={pi}
                    className={tts.state.section === si && tts.state.paragraph === pi && tts.state.playing ? 'reading' : ''}
                    data-tts-section={si}
                    data-tts-paragraph={pi}
                  >
                    {p}
                  </p>
                ))}
                {(s.blocks || []).map((block, bi) => (
                  <ArticleBlock key={`${s.id}-block-${bi}`} block={block} />
                ))}
              </section>
            ))}
          </div>
        ) : (
          <div className="prose">
            <p style={{ fontStyle: 'italic', color: 'var(--muted)' }}>
              Questo capitolo è in lavorazione. Nella prossima edizione del Quaderno
              troverai qui il testo completo del capitolo <b>{chapter.title}</b> tratto
              dal corso <i>{course.title}</i>.
            </p>
            <div className="callout">
              <div className="callout__label">Anteprima · indice del capitolo</div>
              {chapter.sections.map((s, i) => (
                <div key={i} style={{ padding: '6px 0', borderBottom: i < chapter.sections.length - 1 ? '1px dashed var(--rule)' : 'none' }}>
                  § {i + 1}. {s}
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="prev-next">
          <a
            className={!prev ? 'disabled' : ''}
            onClick={() => prev && navigate({ name: 'chapter', courseId, chapterId: prev.id })}
          >
            <div className="prev-next__label">← Precedente</div>
            <div className="prev-next__title">{prev ? prev.title : 'Inizio del corso'}</div>
          </a>
          <a
            className={`next ${!next ? 'disabled' : ''}`}
            onClick={() => next && navigate({ name: 'chapter', courseId, chapterId: next.id })}
          >
            <div className="prev-next__label">Successivo →</div>
            <div className="prev-next__title">{next ? next.title : 'Fine del corso'}</div>
          </a>
        </div>
      </article>
    </div>
  );
}

// ─── Footer ─────────────────────────────────────────────────────
function Footer({ navigate }) {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div>
          <div className="footer__brand"><span className="mark"/>Quaderno</div>
          <p className="footer__attr">
            Tutti i contenuti di questo blog sono traduzioni e adattamenti dei corsi
            pubblici di Claude pubblicati da Anthropic. Quaderno è un progetto editoriale
            indipendente, non affiliato ad Anthropic.
          </p>
        </div>
        <div>
          <h4>Corsi</h4>
          <ul>
            {window.BLOG_DATA.courses.map(c => (
              <li key={c.id} onClick={() => navigate({ name: 'course', courseId: c.id })}>{c.title}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Progetto</h4>
          <ul>
            <li onClick={() => navigate({ name: 'about' })}>Su questo blog</li>
            <li>Attribuzioni</li>
            <li>Segnala un errore</li>
            <li>Feed RSS</li>
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        <div>© 2026 Quaderno · edizione italiana indipendente</div>
        <div>Claude™ è un marchio di Anthropic, PBC</div>
      </div>
    </footer>
  );
}

Object.assign(window, {
  AttributionBanner, ReadingProgress, Nav,
  HomeScreen, CourseScreen, ChapterScreen, AboutScreen, Footer,
  TTSPlayer, BlogIcon: Icon,
});
