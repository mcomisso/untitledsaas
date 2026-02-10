/**
 * Forj - Visual Effects
 * Glowing particles, cursor trails, and ambient animations
 */

(function() {
    'use strict';

    // Theme colors (amber/warm palette)
    const COLORS = {
        amber: { h: 38, s: 92, l: 50 },
        orange: { h: 25, s: 95, l: 53 }
    };

    // ============================================
    // FLOATING PARTICLES BACKGROUND
    // ============================================
    class ParticleSystem {
        constructor(container) {
            this.canvas = document.createElement('canvas');
            this.ctx = this.canvas.getContext('2d');
            this.container = container;
            this.particles = [];
            this.mouse = { x: null, y: null, radius: 150 };

            this.canvas.classList.add('particle-canvas');
            container.appendChild(this.canvas);

            this.resize();
            this.init();
            this.bindEvents();
            this.animate();
        }

        resize() {
            this.width = this.canvas.width = window.innerWidth;
            this.height = this.canvas.height = window.innerHeight;
        }

        init() {
            // Fewer particles for cleaner look
            const particleCount = Math.floor((this.width * this.height) / 50000);
            this.particles = [];

            for (let i = 0; i < particleCount; i++) {
                this.particles.push(new Particle(this.width, this.height));
            }
        }

        bindEvents() {
            window.addEventListener('resize', () => {
                this.resize();
                this.init();
            });

            window.addEventListener('mousemove', (e) => {
                this.mouse.x = e.clientX;
                this.mouse.y = e.clientY;
            });

            window.addEventListener('mouseout', () => {
                this.mouse.x = null;
                this.mouse.y = null;
            });
        }

        animate() {
            this.ctx.clearRect(0, 0, this.width, this.height);

            this.particles.forEach(particle => {
                particle.update(this.mouse, this.width, this.height);
                particle.draw(this.ctx);
            });

            // Connection lines disabled for cleaner look
            // this.drawConnections();

            requestAnimationFrame(() => this.animate());
        }

        drawConnections() {
            for (let i = 0; i < this.particles.length; i++) {
                for (let j = i + 1; j < this.particles.length; j++) {
                    const dx = this.particles[i].x - this.particles[j].x;
                    const dy = this.particles[i].y - this.particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 120) {
                        const opacity = (1 - distance / 120) * 0.15;
                        const color = this.particles[i].isAmber ? COLORS.amber : COLORS.orange;
                        this.ctx.strokeStyle = `hsla(${color.h}, ${color.s}%, ${color.l}%, ${opacity})`;
                        this.ctx.lineWidth = 1;
                        this.ctx.beginPath();
                        this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
                        this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
                        this.ctx.stroke();
                    }
                }
            }
        }
    }

    class Particle {
        constructor(canvasWidth, canvasHeight) {
            this.x = Math.random() * canvasWidth;
            this.y = Math.random() * canvasHeight;
            this.size = Math.random() * 2 + 0.5;  // Smaller particles
            this.baseSize = this.size;
            this.speedX = (Math.random() - 0.5) * 0.3;  // Slower movement
            this.speedY = (Math.random() - 0.5) * 0.3;
            this.isAmber = Math.random() > 0.3;
            this.color = this.isAmber ? COLORS.amber : COLORS.orange;
            this.pulseSpeed = Math.random() * 0.01 + 0.005;  // Slower pulse
            this.pulseOffset = Math.random() * Math.PI * 2;
        }

        update(mouse, canvasWidth, canvasHeight) {
            // Mouse interaction
            if (mouse.x !== null && mouse.y !== null) {
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < mouse.radius) {
                    const force = (mouse.radius - distance) / mouse.radius;
                    const angle = Math.atan2(dy, dx);
                    this.x -= Math.cos(angle) * force * 2;
                    this.y -= Math.sin(angle) * force * 2;
                    this.size = this.baseSize + force * 3;
                } else {
                    this.size = this.baseSize;
                }
            }

            // Movement
            this.x += this.speedX;
            this.y += this.speedY;

            // Wrap around edges
            if (this.x < 0) this.x = canvasWidth;
            if (this.x > canvasWidth) this.x = 0;
            if (this.y < 0) this.y = canvasHeight;
            if (this.y > canvasHeight) this.y = 0;
        }

        draw(ctx) {
            // Simple draw without gradient glow - better performance, cleaner look
            const pulse = Math.sin(Date.now() * this.pulseSpeed + this.pulseOffset) * 0.15 + 0.35;

            ctx.fillStyle = `hsla(${this.color.h}, ${this.color.s}%, ${this.color.l}%, ${pulse})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }


    // ============================================
    // GLOW ON SCROLL - Cards and sections
    // ============================================
    class ScrollGlow {
        constructor() {
            this.elements = document.querySelectorAll('.pricing-card, .testimonial-card, .coaching-card');
            this.bindEvents();
        }

        bindEvents() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('glow-visible');
                    }
                });
            }, { threshold: 0.2 });

            this.elements.forEach(el => observer.observe(el));
        }
    }

    // ============================================
    // TEXT GLOW EFFECT
    // ============================================
    class TextGlow {
        constructor() {
            this.heroTitle = document.querySelector('.hero-title');
            if (this.heroTitle) {
                this.animate();
            }
        }

        animate() {
            const accentSpan = this.heroTitle.querySelector('.text-accent');

            let time = 0;
            const loop = () => {
                time += 0.015;
                const glow = 20 + Math.sin(time) * 8;

                if (accentSpan) {
                    accentSpan.style.textShadow = `0 0 ${glow}px rgba(245, 158, 11, 0.5)`;
                }

                requestAnimationFrame(loop);
            };

            loop();
        }
    }

    // ============================================
    // BUTTON RIPPLE EFFECT
    // ============================================
    class ButtonRipple {
        constructor() {
            document.querySelectorAll('.btn').forEach(btn => {
                btn.addEventListener('click', (e) => this.createRipple(e, btn));
            });
        }

        createRipple(e, button) {
            const ripple = document.createElement('span');
            ripple.classList.add('btn-ripple');

            const rect = button.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);

            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
            ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';

            button.appendChild(ripple);

            ripple.addEventListener('animationend', () => ripple.remove());
        }
    }

    // ============================================
    // FLOATING ELEMENTS PARALLAX
    // ============================================
    class Parallax {
        constructor() {
            this.elements = document.querySelectorAll('.glow-orb');
            window.addEventListener('mousemove', (e) => this.move(e));
        }

        move(e) {
            const x = (e.clientX - window.innerWidth / 2) / 50;
            const y = (e.clientY - window.innerHeight / 2) / 50;

            this.elements.forEach((el, i) => {
                const speed = (i + 1) * 0.5;
                el.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
            });
        }
    }

    // ============================================
    // STATS COUNTER ANIMATION
    // ============================================
    class StatsAnimation {
        constructor() {
            this.observed = false;
            const statsSection = document.querySelector('.stats-grid');
            if (statsSection) {
                const observer = new IntersectionObserver((entries) => {
                    if (entries[0].isIntersecting && !this.observed) {
                        this.observed = true;
                        this.animateStats();
                    }
                }, { threshold: 0.5 });
                observer.observe(statsSection);
            }
        }

        animateStats() {
            document.querySelectorAll('.stat-value').forEach(stat => {
                stat.style.opacity = '0';
                stat.style.transform = 'translateY(20px)';

                setTimeout(() => {
                    stat.style.transition = 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
                    stat.style.opacity = '1';
                    stat.style.transform = 'translateY(0)';
                }, Math.random() * 300);
            });
        }
    }

    // ============================================
    // AMBIENT BACKGROUND PULSE
    // ============================================
    class AmbientPulse {
        constructor() {
            this.overlay = document.createElement('div');
            this.overlay.classList.add('ambient-pulse');
            document.body.appendChild(this.overlay);
        }
    }

    // ============================================
    // INITIALIZE ALL EFFECTS
    // ============================================
    function init() {
        // Wait for DOM
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initEffects);
        } else {
            initEffects();
        }
    }

    function initEffects() {
        // Detect touch devices - disable particles entirely on mobile for performance
        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

        // Particle system (desktop only - mobile Safari has issues with canvas animation)
        const heroSection = document.querySelector('.hero-section');
        if (heroSection && !isTouchDevice) {
            new ParticleSystem(heroSection);
        }

        // Scroll-triggered fade-in animations
        new ScrollGlow();

        // Text glow animation - disabled for cleaner look
        // new TextGlow();

        // Button ripple effects
        new ButtonRipple();

        // Parallax on background orbs - disabled for cleaner look
        // if (!isTouchDevice) {
        //     new Parallax();
        // }

        // Stats animation
        new StatsAnimation();

        // Ambient background pulse - disabled for cleaner look
        // new AmbientPulse();
    }

    init();
})();
