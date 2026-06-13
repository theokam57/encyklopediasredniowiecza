/* ============================================
   EXOVISION GAMES - main.js
   ============================================ */

'use strict';

const CONTACT_ENDPOINT = 'REPLACE_WITH_YOUR_ENDPOINT';

const CONTACT_MESSAGES = {
  en: {
    sending: 'Sending\u2026',
    success: 'Your message has been received. We will reply soon.',
    error: 'Something went wrong. Please try again or email us directly.',
    notConfigured: 'The contact form is not configured yet. Please email us directly.'
  },
  de: {
    sending: 'Wird gesendet\u2026',
    success: 'Deine Nachricht wurde empfangen. Wir melden uns bald.',
    error: 'Etwas ist schiefgelaufen. Bitte versuche es erneut oder schreibe uns direkt per E-Mail.',
    notConfigured: 'Das Kontaktformular ist noch nicht konfiguriert. Bitte schreibe uns direkt per E-Mail.'
  },
  pl: {
    sending: 'Wysy\u0142anie\u2026',
    success: 'Twoja wiadomo\u015b\u0107 zosta\u0142a odebrana. Odpowiemy wkr\u00f3tce.',
    error: 'Co\u015b posz\u0142o nie tak. Spr\u00f3buj ponownie albo napisz do nas bezpo\u015brednio e-mailem.',
    notConfigured: 'Formularz kontaktowy nie jest jeszcze skonfigurowany. Napisz do nas bezpo\u015brednio e-mailem.'
  }
};

(function () {
  const nav = document.querySelector('.site-nav');
  if (!nav) return;

  const onScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

(function () {
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.getElementById('mobile-menu');
  if (!toggle || !menu) return;

  const setOpen = (open) => {
    toggle.classList.toggle('open', open);
    menu.classList.toggle('open', open);
    menu.hidden = !open;
    toggle.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';
  };

  toggle.addEventListener('click', () => {
    setOpen(toggle.getAttribute('aria-expanded') !== 'true');
  });

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setOpen(false));
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      setOpen(false);
      toggle.focus();
    }
  });
})();

(function () {
  const normalizePath = (href) => {
    const url = new URL(href, window.location.href);
    let path = url.pathname.replace(/\/index\.html$/, '/');
    if (path.length > 1) path = path.replace(/\/$/, '');
    return path || '/';
  };

  const current = normalizePath(window.location.href);
  document.querySelectorAll('a[data-nav]').forEach((link) => {
    const active = normalizePath(link.getAttribute('href')) === current;
    link.classList.toggle('active', active);
    if (active) {
      link.setAttribute('aria-current', 'page');
    } else {
      link.removeAttribute('aria-current');
    }
  });
})();

(function () {
  document.querySelectorAll('[data-lang-choice]').forEach((link) => {
    link.addEventListener('click', () => {
      try {
        localStorage.setItem('exovision-language', link.dataset.langChoice || '');
      } catch (error) {
        // Storage can be unavailable in private browsing; links still work.
      }
    });
  });
})();

(function () {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    els.forEach((el) => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  els.forEach((el) => observer.observe(el));
})();

(function () {
  const container = document.querySelector('.particles');
  if (!container || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const count = 28;
  for (let i = 0; i < count; i += 1) {
    const particle = document.createElement('div');
    particle.className = 'particle';

    const size = Math.random() * 3 + 1.5;
    const left = Math.random() * 100;
    const delay = Math.random() * 12;
    const duration = Math.random() * 10 + 8;
    const lightness = 50 + Math.random() * 20;

    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${left}%`;
    particle.style.animationDelay = `${delay}s`;
    particle.style.animationDuration = `${duration}s`;
    particle.style.background = `hsl(${20 + Math.random() * 20}, 90%, ${lightness}%)`;
    particle.style.boxShadow = `0 0 ${size * 2}px currentColor`;

    container.appendChild(particle);
  }
})();

(function () {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const lang = (document.documentElement.lang || 'en').slice(0, 2);
  const messages = CONTACT_MESSAGES[lang] || CONTACT_MESSAGES.en;
  const success = document.getElementById('form-success');
  const error = document.getElementById('form-error');
  const button = form.querySelector('button[type="submit"]');
  const defaultButtonLabel = button?.dataset.defaultLabel || button?.textContent || '';

  const isEndpointConfigured = () => (
    CONTACT_ENDPOINT &&
    CONTACT_ENDPOINT !== 'REPLACE_WITH_YOUR_ENDPOINT' &&
    !CONTACT_ENDPOINT.includes('YOUR_ENDPOINT')
  );

  const showMessage = (element, text) => {
    if (!element) return;
    element.textContent = text;
    element.classList.add('visible');
  };

  const hideMessages = () => {
    success?.classList.remove('visible');
    error?.classList.remove('visible');
  };

  form.addEventListener('input', hideMessages);

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    hideMessages();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    if (!isEndpointConfigured()) {
      showMessage(error, messages.notConfigured);
      return;
    }

    if (button) {
      button.disabled = true;
      button.textContent = messages.sending;
    }

    try {
      const payload = Object.fromEntries(new FormData(form).entries());
      const response = await fetch(CONTACT_ENDPOINT, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error(`Contact endpoint returned ${response.status}`);
      }

      form.reset();
      showMessage(success, messages.success);
    } catch (sendError) {
      showMessage(error, messages.error);
    } finally {
      if (button) {
        button.disabled = false;
        button.textContent = defaultButtonLabel;
      }
    }
  });
})();

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;

    event.preventDefault();
    const navHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h'), 10) || 72;
    const top = target.getBoundingClientRect().top + window.scrollY - navHeight - 16;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});
