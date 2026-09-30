// Shared behaviour for every page: active nav link, mobile menu, nav shadow, About tabs,
// plus the animations: scroll progress bar, typing subtitles and counting stats.

(function () {
    // Highlight the nav link for the current page (<body data-page="...">)
    const page = document.body.dataset.page;
    document.querySelectorAll(`[data-nav="${page}"]`).forEach(el => {
        el.classList.add('active-link');
        el.setAttribute('aria-current', 'page');
    });

    // Mobile menu
    const menuBtn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    if (menuBtn && menu) {
        menuBtn.addEventListener('click', () => {
            const open = menu.classList.toggle('hidden') === false;
            menuBtn.setAttribute('aria-expanded', open);
        });
        menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => menu.classList.add('hidden')));
    }

    // Darken the nav once the page scrolls
    const nav = document.querySelector('.site-nav');
    const onScroll = () => nav && nav.classList.toggle('scrolled', window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // About page tabs (deep-linkable: about.html#systems, about.html#staff)
    const tabs = document.querySelectorAll('.about-tab-btn');
    if (tabs.length) {
        const show = (id) => {
            if (!document.getElementById(`tab-${id}`)) id = 'overview';
            document.querySelectorAll('.about-tab').forEach(t => t.hidden = t.id !== `tab-${id}`);
            tabs.forEach(b => {
                const on = b.dataset.tab === id;
                b.classList.toggle('active', on);
                b.setAttribute('aria-selected', on);
            });
            window.dispatchEvent(new Event('scroll'));   // page height changed: refresh the progress bar
        };
        tabs.forEach(b => b.addEventListener('click', () => {
            history.replaceState(null, '', `#${b.dataset.tab}`);
            show(b.dataset.tab);
        }));
        window.addEventListener('hashchange', () => show(location.hash.slice(1)));
        show(location.hash.slice(1));
    }
})();

/* ------------------------------------------------------------------ animations */
(function () {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const nav = document.querySelector('.site-nav');

    // ---- Scroll progress bar along the bottom of the header
    if (nav) {
        const bar = document.createElement('div');
        bar.className = 'scroll-progress';
        bar.setAttribute('aria-hidden', 'true');
        nav.appendChild(bar);
        let queued = false;
        const update = () => {
            const max = document.documentElement.scrollHeight - window.innerHeight;
            bar.style.transform = `scaleX(${max > 0 ? Math.min(1, window.scrollY / max) : 0})`;
            queued = false;
        };
        const queue = () => { if (!queued) { queued = true; requestAnimationFrame(update); } };
        window.addEventListener('scroll', queue, { passive: true });
        window.addEventListener('resize', queue);
        update();
    }

    if (reduceMotion || !('IntersectionObserver' in window)) return;

    // Run fn(el) once, the first time el scrolls into view
    const onceVisible = (els, fn, threshold = 0.6) => {
        const io = new IntersectionObserver(entries => entries.forEach(e => {
            if (e.isIntersecting) { io.unobserve(e.target); fn(e.target); }
        }), { threshold });
        els.forEach(el => io.observe(el));
    };

    // Keep the real text for screen readers and animate a hidden visual copy
    const splitForAnimation = el => {
        const copy = el.cloneNode(true);
        copy.querySelectorAll('[aria-hidden="true"]').forEach(n => n.remove());
        const sr = document.createElement('span');
        sr.className = 'sr-only';
        sr.textContent = copy.textContent.replace(/\s+/g, ' ').trim();
        const visual = document.createElement('span');
        visual.setAttribute('aria-hidden', 'true');
        while (el.firstChild) visual.appendChild(el.firstChild);
        visual.querySelectorAll('.sr-only').forEach(n => n.remove());
        el.append(sr, visual);
        return visual;
    };

    // ---- Typing subtitles: letters appear one by one behind a blinking cursor.
    // Every letter keeps its space from the start, so the centred text never shifts.
    const prepareTyping = el => {
        const visual = splitForAnimation(el);
        const chars = [];
        const wrap = node => [...node.childNodes].forEach(child => {
            if (child.nodeType !== 3) return wrap(child);
            const frag = document.createDocumentFragment();
            for (const c of child.textContent) {
                const span = document.createElement('span');
                span.className = 'tchar';
                span.textContent = c;
                frag.appendChild(span);
                chars.push(span);
            }
            child.replaceWith(frag);
        });
        wrap(visual);
        el._chars = chars;
    };
    const type = el => {
        const chars = el._chars;
        let i = 0;
        const step = () => {
            if (i > 0) chars[i - 1].classList.remove('caret');
            if (i === chars.length) {
                const last = chars[i - 1];
                last.classList.add('caret');
                setTimeout(() => last.classList.remove('caret'), 1800);   // blink a few times, then vanish
                return;
            }
            chars[i].classList.add('on', 'caret');
            i++;
            setTimeout(step, 45);
        };
        step();
    };
    const heroSubs = document.querySelectorAll('.hero-subtitle');
    const sectionSubs = document.querySelectorAll('.section-subtitle');
    heroSubs.forEach(prepareTyping);
    sectionSubs.forEach(prepareTyping);
    setTimeout(() => heroSubs.forEach(type), 450);         // after the banner fades in
    onceVisible(sectionSubs, type);

    // ---- Counting stats (home page)
    const ease = t => 1 - Math.pow(1 - t, 3);
    const counters = document.querySelectorAll('[data-count-to], [data-sequence]');
    counters.forEach(el => {
        el._out = splitForAnimation(el);
        if (el.dataset.sequence) el._out.textContent = el.dataset.sequence.split('|')[0];
        else el._out.textContent = (el.dataset.countFrom || 0) + (el.dataset.suffix || '');
    });
    onceVisible(counters, el => {
        const duration = 1600;
        const start = performance.now();
        const seq = el.dataset.sequence ? el.dataset.sequence.split('|') : null;
        const from = Number(el.dataset.countFrom || 0), to = Number(el.dataset.countTo);
        const frame = now => {
            const t = Math.min(1, (now - start) / duration);
            el._out.textContent = seq
                ? seq[Math.min(seq.length - 1, Math.floor(t * seq.length))]
                : Math.round(from + (to - from) * ease(t)) + (el.dataset.suffix || '');
            if (t < 1) requestAnimationFrame(frame);
        };
        requestAnimationFrame(frame);
    }, 0.4);
})();
