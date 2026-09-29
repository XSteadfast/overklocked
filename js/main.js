// Shared behaviour for every page: active nav link, mobile menu, nav shadow, About tabs.

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
        };
        tabs.forEach(b => b.addEventListener('click', () => {
            history.replaceState(null, '', `#${b.dataset.tab}`);
            show(b.dataset.tab);
        }));
        window.addEventListener('hashchange', () => show(location.hash.slice(1)));
        show(location.hash.slice(1));
    }
})();
