// ─── Cursor Glow ───
(function () {
  const glow = document.querySelector('.cursor-glow');
  if (!glow) return;
  let mx = 0, my = 0, cx = 0, cy = 0;

  document.addEventListener('mousemove', (e) => {
    mx = e.clientX;
    my = e.clientY;
  });

  (function tick() {
    cx += (mx - cx) * 0.08;
    cy += (my - cy) * 0.08;
    glow.style.left = cx + 'px';
    glow.style.top = cy + 'px';
    requestAnimationFrame(tick);
  })();
})();

// ─── Scroll Reveal ───
(function () {
  const reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
  );

  reveals.forEach((el) => observer.observe(el));
})();

// ─── Active Nav Link on Scroll ───
(function () {
  const links = document.querySelectorAll('.nav-link');
  const sections = [];

  links.forEach((link) => {
    const id = link.getAttribute('data-section');
    const section = document.getElementById(id);
    if (section) sections.push({ link, section });
  });

  if (!sections.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          links.forEach((l) => l.classList.remove('active'));
          const match = sections.find((s) => s.section === entry.target);
          if (match) match.link.classList.add('active');
        }
      });
    },
    { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
  );

  sections.forEach((s) => observer.observe(s.section));
})();

// ─── Smooth Scroll for Nav Links ───
(function () {
  document.querySelectorAll('.nav-link, .btn-primary[href^="#"], .btn-ghost[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href');
      if (!href || href.charAt(0) !== '#') return;
      e.preventDefault();
      const target = document.querySelector(href);
      if (!target) return;
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
})();

// ─── Animated Stat Counters ───
(function () {
  const counters = document.querySelectorAll('.stat-number[data-count]');
  if (!counters.length) return;

  const animate = (el) => {
    const target = parseInt(el.getAttribute('data-count'), 10);
    if (isNaN(target)) return;
    const duration = 1200;
    const start = performance.now();

    function step(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(target * ease);
      if (progress < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animate(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach((c) => observer.observe(c));
})();

// ─── Year Stamp ───
(function () {
  const el = document.getElementById('year');
  if (el) el.textContent = new Date().getFullYear();
})();

// ─── Hero Parallax on Scroll ───
(function () {
  const hero = document.querySelector('.hero-bg');
  if (!hero) return;

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const scrolled = window.scrollY;
        hero.style.transform = 'translateY(' + scrolled * 0.3 + 'px)';
        hero.style.opacity = Math.max(1 - scrolled / 800, 0);
        ticking = false;
      });
      ticking = true;
    }
  });
})();

// ─── Nav Hide on Hero, Show on Scroll Up ───
(function () {
  const nav = document.querySelector('.floating-nav');
  if (!nav) return;

  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    if (currentScroll < 100) {
      nav.style.opacity = '1';
      nav.style.transform = 'translateX(-50%) translateY(0)';
    } else if (currentScroll > lastScroll && currentScroll > 300) {
      nav.style.opacity = '0';
      nav.style.transform = 'translateX(-50%) translateY(20px)';
    } else {
      nav.style.opacity = '1';
      nav.style.transform = 'translateX(-50%) translateY(0)';
    }
    nav.style.transition = 'opacity 0.3s, transform 0.3s';
    lastScroll = currentScroll;
  });
})();
