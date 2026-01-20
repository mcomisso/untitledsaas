/**
 * Forj Theme System
 * URL Parameter: ?category=gaming|music|creative|irl
 */

(function() {
    'use strict';

    // Theme Configurations
    const themes = {
        // Default/Gaming theme (current design)
        gaming: {
            name: 'Gaming',
            colors: {
                primary: '142 70% 45%',      // Green
                primaryBright: '142 76% 52%',
                secondary: '280 85% 55%',    // Purple (RGB vibe)
                secondaryBright: '280 90% 62%',
                accent: '180 100% 50%'       // Cyan
            },
            hero: {
                title: 'Build a streaming career<br><span class="text-accent">that actually pays.</span>',
                description: 'Expert strategy sessions for creators ready to turn content into income.'
            },
            whoCards: [
                '"I\'m ready to take my gaming stream to the next level"',
                '"I want to stand out in a saturated market"',
                '"I need help understanding what sponsors look for"',
                '"I\'m serious about making content creation my career"'
            ],
            platforms: ['twitch', 'youtube', 'tiktok', 'kick', 'instagram'],
            ctaText: 'Book Your Free Call',
            bodyClass: 'theme-gaming'
        },

        music: {
            name: 'Music',
            colors: {
                primary: '280 85% 55%',       // Purple
                primaryBright: '280 90% 62%',
                secondary: '320 85% 55%',     // Pink/Magenta
                secondaryBright: '320 90% 62%',
                accent: '45 100% 55%'         // Gold
            },
            hero: {
                title: 'Amplify your<br><span class="text-accent">music career.</span>',
                description: 'From bedroom producer to main stage, get expert guidance on growing your fanbase, monetizing your sound, and building a sustainable music brand.'
            },
            whoCards: [
                '"I want to grow my audience beyond just friends and family"',
                '"I need help understanding music industry monetization"',
                '"I\'m not sure how to promote my music effectively"',
                '"I\'m ready to turn my passion into a profession"'
            ],
            platforms: ['youtube', 'tiktok', 'twitch', 'instagram'],
            ctaText: 'Book a Free Session',
            bodyClass: 'theme-music'
        },

        creative: {
            name: 'Creative',
            colors: {
                primary: '25 95% 55%',        // Orange
                primaryBright: '25 100% 62%',
                secondary: '45 95% 55%',      // Yellow/Gold
                secondaryBright: '45 100% 62%',
                accent: '350 85% 60%'         // Coral/Red
            },
            hero: {
                title: 'Create art that<br><span class="text-accent">pays the bills.</span>',
                description: 'From digital art to traditional crafts, get expert guidance on building your creative brand, finding your audience, and monetizing your artistic skills.'
            },
            whoCards: [
                '"I want to turn my art into a sustainable income"',
                '"I need help pricing my work and finding clients"',
                '"I\'m not sure which platforms work best for artists"',
                '"I\'m ready to build a real business around my creativity"'
            ],
            platforms: ['youtube', 'tiktok', 'instagram', 'twitch'],
            ctaText: 'Book a Free Consult',
            bodyClass: 'theme-creative'
        },

        irl: {
            name: 'Just Chatting',
            colors: {
                primary: '200 85% 55%',       // Blue
                primaryBright: '200 90% 62%',
                secondary: '340 85% 60%',     // Pink
                secondaryBright: '340 90% 65%',
                accent: '160 70% 50%'         // Teal
            },
            hero: {
                title: 'Build a community<br><span class="text-accent">that pays you.</span>',
                description: 'From casual chats to viral moments, get expert guidance on growing your personal brand, engaging your audience, and monetizing your personality.'
            },
            whoCards: [
                '"I want to grow my audience beyond my current followers"',
                '"I need help understanding what makes content viral"',
                '"I\'m not sure how to monetize without feeling salesy"',
                '"I\'m ready to make content creation my full-time thing"'
            ],
            platforms: ['tiktok', 'youtube', 'instagram', 'twitch'],
            ctaText: 'Book a Free Chat',
            bodyClass: 'theme-irl'
        }
    };

    // Platform SVG icons
    const platformIcons = {
        twitch: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"/></svg>',
        youtube: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>',
        tiktok: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>',
        kick: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M1.333 0v24h5.334v-8.946L12.106 24h6.547l-7.48-10.666L18.107 4h-6.214l-5.226 7.28V0H1.333zm16 0v4h5.334V0h-5.334zm0 8v16h5.334V8h-5.334z"/></svg>',
        instagram: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>'
    };

    // Get theme from URL parameter
    function getThemeFromURL() {
        const params = new URLSearchParams(window.location.search);
        const category = params.get('category') || params.get('c');
        return themes[category] || themes.gaming;
    }

    // Apply CSS custom properties
    function applyThemeColors(theme) {
        const root = document.documentElement;
        root.style.setProperty('--neon-green', theme.colors.primary);
        root.style.setProperty('--neon-green-bright', theme.colors.primaryBright);
        root.style.setProperty('--neon-orange', theme.colors.secondary);
        root.style.setProperty('--neon-orange-bright', theme.colors.secondaryBright);
        root.style.setProperty('--primary', theme.colors.primary);
        root.style.setProperty('--secondary', theme.colors.secondary);
        root.style.setProperty('--ring', theme.colors.primary);
    }

    // Update hero content
    function updateHeroContent(theme) {
        const heroTitle = document.querySelector('.hero-title');
        const heroDesc = document.querySelector('.hero-description');

        if (heroTitle) {
            heroTitle.innerHTML = theme.hero.title;
        }
        if (heroDesc) {
            heroDesc.textContent = theme.hero.description;
        }
    }

    // Update "This is for you if" cards
    function updateWhoCards(theme) {
        const cards = document.querySelectorAll('.who-card p');
        theme.whoCards.forEach((text, index) => {
            if (cards[index]) {
                cards[index].textContent = text;
            }
        });
    }

    // Update platform icons
    function updatePlatforms(theme) {
        const platformsGrid = document.querySelector('.platforms-grid');
        if (!platformsGrid) return;

        const platformNames = {
            twitch: 'Twitch',
            youtube: 'YouTube',
            tiktok: 'TikTok',
            kick: 'Kick',
            instagram: 'Instagram'
        };

        platformsGrid.innerHTML = theme.platforms.map(platform => `
            <div class="platform-item">
                <span class="platform-icon ${platform}">${platformIcons[platform]}</span>
                <span>${platformNames[platform]}</span>
            </div>
        `).join('');
    }

    // Update CTA button text
    function updateCTAText(theme) {
        const primaryBtn = document.querySelector('.hero-cta .btn-primary');
        if (primaryBtn) {
            primaryBtn.textContent = theme.ctaText;
        }
    }

    // Add theme class to body
    function applyBodyClass(theme) {
        // Remove all theme classes
        document.body.classList.remove('theme-gaming', 'theme-music', 'theme-creative', 'theme-irl');
        // Add current theme class
        document.body.classList.add(theme.bodyClass);
    }

    // Initialize theme
    function initTheme() {
        const theme = getThemeFromURL();

        applyThemeColors(theme);
        applyBodyClass(theme);
        updateHeroContent(theme);
        updateWhoCards(theme);
        updatePlatforms(theme);
        updateCTAText(theme);

        // Log active theme for debugging
        console.log(`[Forj] Theme loaded: ${theme.name}`);
    }

    // Run on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initTheme);
    } else {
        initTheme();
    }

    // Expose for debugging
    window.ForjThemes = {
        themes,
        current: getThemeFromURL,
        apply: initTheme
    };
})();
