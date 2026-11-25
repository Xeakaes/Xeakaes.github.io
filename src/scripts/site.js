// Small, dependency-free enhancements. The page is complete without this file.
const root = document.documentElement;
const reduce = matchMedia('(prefers-reduced-motion: reduce)');

// Theme toggle
const toggle = document.querySelector('[data-theme-toggle]');
if (toggle) {
  const sync = () => {
    const dark = root.dataset.theme === 'dark';
    toggle.setAttribute('aria-pressed', String(dark));
    toggle.querySelector('[data-theme-text]').textContent = dark ? 'Dark' : 'Light';
  };
  toggle.addEventListener('click', () => {
    root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    try { localStorage.setItem('theme', root.dataset.theme); } catch {}
    sync();
  });
  sync();
}
// Follow the OS while the visitor has not chosen; re-sync after back/forward cache.
const saved = () => { try { return localStorage.getItem('theme'); } catch { return null; } };
const apply = () => {
  const s = saved();
  const next = s === 'light' || s === 'dark' ? s : matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  root.dataset.theme = next;
  if (toggle) {
    toggle.setAttribute('aria-pressed', String(next === 'dark'));
    toggle.querySelector('[data-theme-text]').textContent = next === 'dark' ? 'Dark' : 'Light';
  }
};
matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => { if (!saved()) apply(); });
addEventListener('pageshow', (e) => { if (e.persisted && saved()) apply(); });

// Section entrances: hide only what is below the first screen.
if (!reduce.matches && 'IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
  }, { rootMargin: '0px 0px -6% 0px' });
  const items = document.querySelectorAll('[data-reveal]');
  items.forEach((el) => { if (el.getBoundingClientRect().top < innerHeight) el.classList.add('is-in'); else io.observe(el); });
  root.classList.add('reveal-ready');
  addEventListener('beforeprint', () => items.forEach((el) => el.classList.add('is-in')));
}

// Hero geometry: pause off-screen; restrained parallax for fine pointers.
const art = document.querySelector('[data-art]');
if (art && 'IntersectionObserver' in window) {
  new IntersectionObserver(([e]) => art.classList.toggle('is-paused', !e.isIntersecting)).observe(art);
  if (!reduce.matches && matchMedia('(pointer: fine)').matches) {
    let frame = 0;
    addEventListener('pointermove', (e) => {
      if (frame || art.classList.contains('is-paused')) return;
      frame = requestAnimationFrame(() => {
        art.style.setProperty('--px', (e.clientX / innerWidth - 0.5).toFixed(3));
        art.style.setProperty('--py', (e.clientY / innerHeight - 0.5).toFixed(3));
        frame = 0;
      });
    }, { passive: true });
  }
}

// Copy email (button is hidden until we know copying is possible)
for (const btn of document.querySelectorAll('[data-copy]')) {
  if (!navigator.clipboard) continue;
  btn.hidden = false;
  const status = document.querySelector('[data-copy-status]');
  btn.addEventListener('click', async () => {
    try { await navigator.clipboard.writeText(btn.dataset.copy); status.textContent = 'Email address copied.'; }
    catch { status.textContent = 'Copy failed. Select the address instead.'; }
    setTimeout(() => (status.textContent = ''), 4000);
  });
}

// Click-to-play demos: poster first, video only on request.
for (const fig of document.querySelectorAll('[data-demo]')) {
  const btn = fig.querySelector('button');
  const video = fig.querySelector('video');
  btn.hidden = false;
  btn.addEventListener('click', () => {
    btn.hidden = true;
    fig.classList.add('is-playing');
    video.focus();
    video.play().catch(() => {});
  });
}
