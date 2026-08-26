(function () {
    'use strict';

    /* ===== Navbar scroll state ===== */
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
        if (!navbar) return;
        navbar.classList.toggle('scrolled', window.scrollY > 8);
    }, { passive: true });

    /* ===== Mobile menu ===== */
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            const open = navMenu.classList.toggle('open');
            menuToggle.classList.toggle('open', open);
            menuToggle.setAttribute('aria-expanded', String(open));
        });

        navMenu.addEventListener('click', (e) => {
            if (e.target.closest('.nav-link')) {
                navMenu.classList.remove('open');
                menuToggle.classList.remove('open');
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }

    /* ===== Active nav link ===== */
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    function updateActiveLink() {
        let current = '';
        sections.forEach((section) => {
            if (window.scrollY >= section.offsetTop - 120) {
                current = section.getAttribute('id');
            }
        });
        navLinks.forEach((link) => {
            link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
        });
    }

    window.addEventListener('scroll', updateActiveLink, { passive: true });
    updateActiveLink();

    /* ===== Typewriter ===== */
    const typewriter = document.getElementById('typewriter');

    function getRoles() {
        const roles = [];
        for (let i = 0; i < 10; i++) {
            const role = window.i18n.getTranslation('hero.roles.' + i);
            if (!role || role.startsWith('hero.roles.')) break;
            roles.push(role);
        }
        return roles.length ? roles : [window.i18n.getTranslation('hero.title')];
    }

    function startTypewriter() {
        if (!typewriter) return;
        const roles = getRoles();
        let roleIndex = 0;
        let charIndex = 0;
        let deleting = false;

        function tick() {
            const current = roles[roleIndex];
            charIndex += deleting ? -1 : 1;
            typewriter.textContent = current.slice(0, charIndex);

            let delay = deleting ? 45 : 90;
            if (!deleting && charIndex === current.length) {
                delay = 1800;
                deleting = true;
            } else if (deleting && charIndex === 0) {
                deleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
                delay = 400;
            }
            setTimeout(tick, delay);
        }

        tick();
    }

    /* ===== Reveal on scroll ===== */
    let revealObserver = null;

    if ('IntersectionObserver' in window) {
        revealObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    }

    window.observeReveals = function observeReveals() {
        const elements = document.querySelectorAll('.reveal:not(.visible)');
        if (revealObserver) {
            elements.forEach((el) => revealObserver.observe(el));
        } else {
            elements.forEach((el) => el.classList.add('visible'));
        }
        document.querySelectorAll('.stat-number:not([data-counted])').forEach((el) => {
            if (statObserver) statObserver.observe(el);
        });
    };

    /* ===== Profile photo ===== */
    const profilePhoto = document.getElementById('profilePhoto');
    if (profilePhoto && window.SITE_DATA) {
        profilePhoto.src = window.SITE_DATA.profile.photo;
        profilePhoto.addEventListener('error', () => profilePhoto.remove());
    }

    /* ===== Contact form -> mailto ===== */
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            const subject = encodeURIComponent(window.i18n.getTranslation('contact.mailto.subject'));
            const body = encodeURIComponent(`Nome: ${name}\nEmail: ${email}\n\n${message}`);
            window.location.href = `mailto:${window.SITE_DATA.profile.email}?subject=${subject}&body=${body}`;
        });
    }

    /* ===== Footer year ===== */
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    /* ===== Scroll progress bar ===== */
    const progressBar = document.getElementById('scrollProgress');

    window.addEventListener('scroll', () => {
        if (!progressBar) return;
        const max = document.documentElement.scrollHeight - window.innerHeight;
        progressBar.style.width = (max > 0 ? (window.scrollY / max) * 100 : 0) + '%';
    }, { passive: true });

    /* ===== Back to top ===== */
    const backToTop = document.getElementById('backToTop');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (backToTop) {
        window.addEventListener('scroll', () => {
            backToTop.classList.toggle('visible', window.scrollY > 400);
        }, { passive: true });

        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' });
        });
    }

    /* ===== Magnetic buttons ===== */
    if (!reducedMotion) {
        document.querySelectorAll('.btn, .back-to-top').forEach((btn) => {
            btn.classList.add('magnetic');
            btn.addEventListener('mousemove', (e) => {
                const rect = btn.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                btn.style.transform = `translate(${x * 0.22}px, ${y * 0.35}px)`;
            });
            btn.addEventListener('mouseleave', () => {
                btn.style.transform = '';
            });
        });
    }

    /* ===== Card spotlight (mouse-tracked glow) ===== */
    let spotX = 0;
    let spotY = 0;
    let spotTicking = false;

    function updateSpotlight() {
        document.querySelectorAll('.interactive-card').forEach((card) => {
            const rect = card.getBoundingClientRect();
            card.style.setProperty('--mouseX', (spotX - rect.left) + 'px');
            card.style.setProperty('--mouseY', (spotY - rect.top) + 'px');
        });
        spotTicking = false;
    }

    document.addEventListener('mousemove', (e) => {
        spotX = e.clientX;
        spotY = e.clientY;
        if (!spotTicking) {
            spotTicking = true;
            requestAnimationFrame(updateSpotlight);
        }
    }, { passive: true });

    /* ===== Hero particles ===== */
    function initHeroParticles() {
        const canvas = document.querySelector('.hero-particles');
        if (!canvas || !canvas.getContext) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        const host = canvas.parentElement;
        let w = 0;
        let h = 0;
        let particles = [];
        const mouse = { x: -9999, y: -9999 };

        function pickCount() {
            const area = host.clientWidth * host.clientHeight;
            return Math.max(30, Math.min(90, Math.round(area / 14000)));
        }

        function resize() {
            const dpr = window.devicePixelRatio || 1;
            w = host.clientWidth;
            h = host.clientHeight;
            canvas.width = w * dpr;
            canvas.height = h * dpr;
            canvas.style.width = w + 'px';
            canvas.style.height = h + 'px';
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        }

        function seed() {
            particles = Array.from({ length: pickCount() }, () => ({
                x: Math.random() * w,
                y: Math.random() * h,
                vx: (Math.random() - 0.5) * 0.35,
                vy: (Math.random() - 0.5) * 0.35
            }));
        }

        function getAccentRGB() {
            const v = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim();
            if (v.startsWith('#')) {
                const hex = v.slice(1);
                const full = hex.length === 3 ? hex.split('').map((c) => c + c).join('') : hex;
                const n = parseInt(full, 16);
                return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
            }
            const m = v.match(/\d+/g);
            return m ? m.slice(0, 3).map(Number) : [79, 70, 229];
        }

        const LINK_DIST = 130;
        const MOUSE_RADIUS = 140;

        function frame() {
            ctx.clearRect(0, 0, w, h);
            const [r, g, b] = getAccentRGB();
            for (const p of particles) {
                const dx = p.x - mouse.x;
                const dy = p.y - mouse.y;
                const d2 = dx * dx + dy * dy;
                if (d2 < MOUSE_RADIUS * MOUSE_RADIUS && d2 > 1) {
                    const f = (1 - Math.sqrt(d2) / MOUSE_RADIUS) * 0.6;
                    p.vx += (dx / Math.sqrt(d2)) * f * 0.15;
                    p.vy += (dy / Math.sqrt(d2)) * f * 0.15;
                }
                p.vx *= 0.985;
                p.vy *= 0.985;
                p.x += p.vx;
                p.y += p.vy;
                if (p.x < 0) p.x += w;
                else if (p.x > w) p.x -= w;
                if (p.y < 0) p.y += h;
                else if (p.y > h) p.y -= h;
                ctx.fillStyle = `rgba(${r},${g},${b},0.7)`;
                ctx.beginPath();
                ctx.arc(p.x, p.y, 1.6, 0, Math.PI * 2);
                ctx.fill();
            }
            ctx.lineWidth = 0.6;
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const a = particles[i];
                    const b = particles[j];
                    const dx = a.x - b.x;
                    const dy = a.y - b.y;
                    const d = Math.hypot(dx, dy);
                    if (d < LINK_DIST) {
                        const alpha = (1 - d / LINK_DIST) * 0.28;
                        ctx.strokeStyle = `rgba(${r},${g},${b},${alpha})`;
                        ctx.beginPath();
                        ctx.moveTo(a.x, a.y);
                        ctx.lineTo(b.x, b.y);
                        ctx.stroke();
                    }
                }
            }
            if (!reducedMotion) requestAnimationFrame(frame);
        }

        resize();
        seed();
        requestAnimationFrame(frame);

        let resizeTO;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTO);
            resizeTO = setTimeout(() => { resize(); seed(); }, 120);
        });

        host.addEventListener('mousemove', (e) => {
            const rect = host.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        });

        host.addEventListener('mouseleave', () => {
            mouse.x = -9999;
            mouse.y = -9999;
        });
    }

    /* ===== Stat counters ===== */
    let statObserver = null;

    if ('IntersectionObserver' in window) {
        statObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                const el = entry.target;
                const target = parseInt(el.getAttribute('data-target'), 10) || 0;
                const duration = 1600;
                const start = performance.now();

                function tick(now) {
                    const t = Math.min(1, (now - start) / duration);
                    const eased = 1 - Math.pow(1 - t, 3);
                    el.textContent = Math.floor(target * eased);
                    if (t < 1) requestAnimationFrame(tick);
                    else el.textContent = target;
                }

                requestAnimationFrame(tick);
                el.setAttribute('data-counted', '1');
                statObserver.unobserve(el);
            });
        }, { threshold: 0.5 });
    }

    /* ===== Init ===== */
    initHeroParticles();
    window.observeReveals();
    startTypewriter();
})();
