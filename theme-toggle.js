/**
 * Forj Landing - Light/Dark/System theme toggle
 * Reads/writes the same data-theme / data-theme-mode attributes and
 * localStorage key the inline <head> script sets before first paint.
 */
(function () {
    'use strict';

    var KEY = 'forj-landing-theme';
    var root = document.documentElement;
    var mediaQuery = (typeof window.matchMedia === 'function')
        ? window.matchMedia('(prefers-color-scheme: dark)')
        : null;

    function resolve(mode) {
        if (mode === 'system') {
            return mediaQuery ? (mediaQuery.matches ? 'dark' : 'light') : 'dark';
        }
        return mode;
    }

    function applyMode(mode) {
        root.setAttribute('data-theme', resolve(mode));
        root.setAttribute('data-theme-mode', mode);
        try {
            localStorage.setItem(KEY, mode);
        } catch (e) {
            // localStorage unavailable (privacy mode, etc) - theme still
            // applies for this page view, it just won't persist.
        }
    }

    function onSystemChange() {
        if (root.getAttribute('data-theme-mode') === 'system') {
            root.setAttribute('data-theme', resolve('system'));
        }
    }

    if (mediaQuery) {
        if (mediaQuery.addEventListener) {
            mediaQuery.addEventListener('change', onSystemChange);
        } else if (mediaQuery.addListener) {
            // Safari < 14
            mediaQuery.addListener(onSystemChange);
        }
    }

    function setUpChoiceButtons(selector) {
        document.querySelectorAll(selector).forEach(function (btn) {
            btn.addEventListener('click', function () {
                applyMode(btn.getAttribute('data-theme-choice'));
                closeMenu();
            });
        });
    }

    setUpChoiceButtons('.theme-switcher-option');
    setUpChoiceButtons('.mobile-theme-option');

    // Desktop popover open/close
    var switcher = document.querySelector('.theme-switcher');
    var trigger = switcher ? switcher.querySelector('.theme-switcher-trigger') : null;

    function openMenu() {
        if (!switcher) return;
        switcher.classList.add('open');
        trigger.setAttribute('aria-expanded', 'true');
    }

    function closeMenu() {
        if (!switcher) return;
        switcher.classList.remove('open');
        trigger.setAttribute('aria-expanded', 'false');
    }

    function toggleMenu() {
        if (!switcher) return;
        switcher.classList.contains('open') ? closeMenu() : openMenu();
    }

    if (trigger) {
        trigger.addEventListener('click', function (e) {
            e.stopPropagation();
            toggleMenu();
        });

        document.addEventListener('click', function (e) {
            if (switcher && !switcher.contains(e.target)) {
                closeMenu();
            }
        });

        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') closeMenu();
        });
    }
})();
