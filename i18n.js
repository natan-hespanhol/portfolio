(function () {
    'use strict';

    const SUPPORTED_LANGS = ['pt', 'en'];

    function detectLanguage() {
        const stored = localStorage.getItem('preferredLanguage');
        if (stored && SUPPORTED_LANGS.includes(stored)) return stored;
        const browserLang = navigator.language || navigator.userLanguage || '';
        return browserLang.toLowerCase().startsWith('pt') ? 'pt' : 'en';
    }

    let currentLanguage = detectLanguage();

    function flatten(obj, prefix) {
        return Object.keys(obj).reduce((acc, key) => {
            const value = obj[key];
            const path = prefix ? `${prefix}.${key}` : key;
            if (value && typeof value === 'object' && !Array.isArray(value)) {
                Object.assign(acc, flatten(value, path));
            } else {
                acc[path] = value;
            }
            return acc;
        }, {});
    }

    const FLAT = {
        pt: flatten(SITE_DATA.i18n.pt),
        en: flatten(SITE_DATA.i18n.en)
    };

    function t(field) {
        if (!field) return '';
        if (typeof field === 'object') return field[currentLanguage] ?? field.pt ?? '';
        return field;
    }

    function escapeHTML(str) {
        return String(str).replace(/[&<>"']/g, (ch) => ({
            '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
        }[ch]));
    }

    function renderStats() {
        const container = document.getElementById('heroStats');
        if (!container) return;
        container.innerHTML = SITE_DATA.stats.map((stat) => `
            <div class="stat-item">
                <div class="stat-value">
                    <span class="stat-number" data-target="${stat.value}">0</span>
                    ${stat.suffix ? `<span class="stat-suffix">${escapeHTML(stat.suffix)}</span>` : ''}
                </div>
                <span class="stat-label">${escapeHTML(t(stat.label))}</span>
            </div>
        `).join('');
    }

    function renderSkills() {
        const container = document.querySelector('#skills .skills-grid');
        if (!container) return;
        container.innerHTML = SITE_DATA.skills.map((group, i) => `
            <div class="skill-category interactive-card reveal" style="transition-delay:${i * 100}ms">
                <h3 class="category-title">${escapeHTML(FLAT[currentLanguage]['skills.category.' + group.category] || group.category)}</h3>
                <div class="skill-chips">
                    ${group.items.map(item => `<span class="chip">${escapeHTML(t(item))}</span>`).join('')}
                </div>
            </div>
        `).join('');
    }

    function renderExperience() {
        const timeline = document.querySelector('.timeline');
        if (!timeline) return;
        timeline.innerHTML = SITE_DATA.experience.map((job, i) => `
            <div class="timeline-item reveal" style="transition-delay:${i * 100}ms">
                <div class="timeline-marker"></div>
                <div class="timeline-content interactive-card">
                    <div class="timeline-header">
                        <h3 class="timeline-title">${escapeHTML(t(job.title))}</h3>
                        ${job.current ? `<span class="badge-current">${escapeHTML(FLAT[currentLanguage]['experience.current'])}</span>` : ''}
                    </div>
                    <p class="timeline-company">${escapeHTML(t(job.company))}</p>
                    <p class="timeline-period">${escapeHTML(t(job.period))}</p>
                    <p class="timeline-description">${escapeHTML(t(job.description))}</p>
                </div>
            </div>
        `).join('');
    }

    function renderDomain() {
        const container = document.querySelector('#domain .domain-grid');
        if (!container) return;
        container.innerHTML = SITE_DATA.domain.map((item, i) => `
            <div class="domain-card interactive-card reveal" style="transition-delay:${i * 100}ms">
                <div class="domain-icon">${item.icon}</div>
                <h3>${escapeHTML(t(item.title))}</h3>
                <p>${escapeHTML(t(item.description))}</p>
            </div>
        `).join('');
    }

    function renderCertifications() {
        const container = document.querySelector('#certifications .certifications-grid');
        if (!container) return;
        const viewText = FLAT[currentLanguage]['certifications.view'];
        container.innerHTML = SITE_DATA.certifications.map((cert, i) => `
            <div class="cert-card interactive-card reveal" style="transition-delay:${i * 100}ms">
                <div class="cert-media">
                    <span class="img-fallback">${escapeHTML((t(cert.issuer).charAt(0) || '?').toUpperCase())}</span>
                    ${cert.logo ? `<img src="${escapeHTML(cert.logo)}" alt="${escapeHTML(t(cert.issuer))} logo" loading="lazy" onerror="this.remove()">` : ''}
                </div>
                <div class="cert-info">
                    <p class="cert-issuer">${escapeHTML(t(cert.issuer))}</p>
                    <h3>${escapeHTML(t(cert.title))}</h3>
                    <p class="cert-description">${escapeHTML(t(cert.description))}</p>
                    <a class="cert-link" href="${escapeHTML(cert.link)}" target="_blank" rel="noopener">${escapeHTML(viewText)} →</a>
                </div>
            </div>
        `).join('');
    }

    function renderProjects() {
        const container = document.querySelector('#projects .projects-grid');
        if (!container) return;
        const viewText = FLAT[currentLanguage]['projects.view'];
        container.innerHTML = SITE_DATA.projects.map((project, i) => `
            <div class="project-card interactive-card reveal" style="transition-delay:${i * 100}ms">
                <div class="project-media">
                    <span class="img-fallback">${project.icon || '🚀'}</span>
                    ${project.image ? `<img src="${escapeHTML(project.image)}" alt="${escapeHTML(t(project.title))} screenshot" loading="lazy" onerror="this.remove()">` : ''}
                </div>
                <div class="project-info">
                    <h3 class="project-title">${escapeHTML(t(project.title))}</h3>
                    <p class="project-description">${escapeHTML(t(project.description))}</p>
                    <div class="project-tags">
                        ${project.tags.map(tag => `<span class="tag">${escapeHTML(tag)}</span>`).join('')}
                    </div>
                    <a class="project-link" href="${escapeHTML(project.link)}" target="_blank" rel="noopener">${escapeHTML(viewText)} →</a>
                </div>
            </div>
        `).join('');
    }

    function renderBeyond() {
        const container = document.querySelector('#beyond .beyond-grid');
        if (!container) return;
        container.innerHTML = SITE_DATA.beyond.map((item, i) => `
            <div class="beyond-card interactive-card reveal" style="transition-delay:${i * 100}ms">
                <div class="beyond-icon">${item.icon}</div>
                <h3>${escapeHTML(t(item.title))}</h3>
                <p>${escapeHTML(t(item.description))}</p>
                ${item.link ? `<a href="${escapeHTML(item.link)}" target="_blank" rel="noopener">→</a>` : ''}
            </div>
        `).join('');
    }

    function renderContactMethods() {
        const container = document.querySelector('#contactMethods');
        if (!container) return;
        const icons = { email: '📧', linkedin: '💼', github: '🐙' };
        container.innerHTML = SITE_DATA.contact.methods.map((method) => `
            <div class="contact-method reveal">
                <div class="contact-icon">${icons[method.key] || '🔗'}</div>
                <div class="contact-details">
                    <h4>${escapeHTML(FLAT[currentLanguage]['contact.' + method.key] || method.label)}</h4>
                    <a href="${escapeHTML(method.href)}" ${method.href.startsWith('http') ? 'target="_blank" rel="noopener"' : ''}>${escapeHTML(method.value)}</a>
                </div>
            </div>
        `).join('');
    }

    function renderDynamicSections() {
        renderSkills();
        renderExperience();
        renderDomain();
        renderCertifications();
        renderProjects();
        renderBeyond();
        renderContactMethods();
        renderStats();
        if (window.observeReveals) window.observeReveals();
    }

    function translatePage(lang) {
        if (!FLAT[lang]) return;
        currentLanguage = lang;
        localStorage.setItem('preferredLanguage', lang);
        document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';

        document.querySelectorAll('[data-i18n]').forEach((element) => {
            const key = element.getAttribute('data-i18n');
            const translation = FLAT[lang][key];
            if (translation === undefined) return;
            const attr = element.getAttribute('data-i18n-attr');
            if (attr) {
                element.setAttribute(attr, translation);
            } else {
                element.textContent = translation;
            }
        });

        document.querySelectorAll('.lang-btn').forEach((btn) => {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
        });

        renderDynamicSections();
    }

    document.addEventListener('DOMContentLoaded', () => {
        translatePage(currentLanguage);
        document.querySelectorAll('.lang-btn').forEach((btn) => {
            btn.addEventListener('click', () => translatePage(btn.getAttribute('data-lang')));
        });
    });

    window.i18n = {
        translate: translatePage,
        getCurrentLanguage: () => currentLanguage,
        getTranslation: (key) => FLAT[currentLanguage][key] ?? key,
        t,
        renderDynamicSections
    };
})();
