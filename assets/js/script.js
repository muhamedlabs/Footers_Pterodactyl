// ===== FOOTER: Muhamed Ads =====
// Язык: uk / en явно, всё остальное — русский.

function detectLanguage() {
    const userLang = navigator.language || navigator.userLanguage || 'ru';
    const langCode = userLang.split('-')[0].toLowerCase();

    if (langCode === 'uk') {
        return {
            texts: [
                "Круті YouTube-канали, ІТ-проєкти та індивідуальні плани Андрія Мухамеда.",
                "Креативні YouTube-канали, сміливі IT-проєкти та бачення Андрія Мухамеда.",
                "Де поєднуються YouTube, технології та ідеї — світ Андрія Мухамеда."
            ],
            brand: "Мухамед",
            buttonText: "Мультипосилання",
            copyright: "Усі права захищено",
            protect: "Захист від копіювання",
            bgLabel: "Фон", bgOn: "Вкл", bgOff: "Викл",
            toast: "Копіювання вимкнено"
        };
    }
    if (langCode === 'en') {
        return {
            texts: [
                "Great YouTube channels, IT projects and individual plans by Andrey Muhamed.",
                "Creative YouTube channels, bold IT projects, and the vision of Andrey Muhamed.",
                "Where YouTube, technology, and ideas unite — the world of Andrey Muhamed."
            ],
            brand: "Muhamed",
            buttonText: "Multilink",
            copyright: "All rights reserved",
            protect: "Copy protection",
            bgLabel: "Background", bgOn: "On", bgOff: "Off",
            toast: "Copying is disabled"
        };
    }
    return {
        texts: [
            "Отличные YouTube-каналы, IT-проекты и индивидуальные планы Андрея Мухамеда.",
            "Креативные YouTube-каналы, смелые IT-проекты и видение Андрея Мухамеда.",
            "Где объединяются YouTube, технологии и идеи — мир Андрея Мухамеда."
        ],
        brand: "Мухамед",
        buttonText: "Мультиссылка",
        copyright: "Все права защищены",
        protect: "Защита от копирования",
        bgLabel: "Фон", bgOn: "Вкл", bgOff: "Выкл",
        toast: "Копирование отключено"
    };
}

// ===== TYPEWRITER =====
class TypewriterEffect {
    constructor() {
        this.typingElement = document.getElementById("typing-text");
        this.titleElement = document.getElementById("title-text");
        this.buttonTextElement = document.getElementById("button-text");
        this.data = detectLanguage();

        this.textIndex = 0;
        this.charIndex = 0;
        this.isDeleting = false;
        this.isPaused = false;
        this.animationId = null;
        this.typingSpeed = 50;
        this.deletingSpeed = 30;
        this.pauseBetweenTexts = 1500;
        this.pauseAfterTyping = 2000;
        this.prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        this.initialize();
    }

    initialize() {
        if (this.titleElement) this.titleElement.innerHTML = this.data.brand + ' <b>Ads</b>';
        if (this.buttonTextElement) this.buttonTextElement.textContent = this.data.buttonText;
        const setText = (id, v) => { const el = document.getElementById(id); if (el) el.textContent = v; };
        setText('ft-copy-text', '\u00a9 ' + new Date().getFullYear() + ' ' + this.data.brand + ' Ads \u00b7 ' + this.data.copyright);
        setText('ft-protect-text', this.data.protect);
        setText('bg-label', this.data.bgLabel);

        if (this.prefersReducedMotion) {
            this.render(this.data.texts[0]);
            return;
        }
        this.render('');
        setTimeout(() => this.typeLoop(), 800);
    }

    render(text) {
        this.typingElement.innerHTML = '';
        const textSpan = document.createElement('span');
        textSpan.className = 'ft-t';
        textSpan.textContent = text;
        const cursor = document.createElement('span');
        cursor.className = 'typing-cursor';
        cursor.setAttribute('aria-hidden', 'true');
        this.typingElement.appendChild(textSpan);
        this.typingElement.appendChild(cursor);
    }

    typeLoop() {
        if (this.isPaused) {
            this.animationId = setTimeout(() => this.typeLoop(), 100);
            return;
        }

        const current = this.data.texts[this.textIndex];
        const shown = this.isDeleting
            ? current.substring(0, this.charIndex - 1)
            : current.substring(0, this.charIndex + 1);
        this.render(shown);

        if (!this.isDeleting && this.charIndex === current.length) {
            this.isPaused = true;
            setTimeout(() => {
                this.isPaused = false;
                this.isDeleting = true;
                this.animationId = setTimeout(() => this.typeLoop(), 500);
            }, this.pauseAfterTyping);
            return;
        }

        if (this.isDeleting && this.charIndex === 0) {
            this.isDeleting = false;
            this.textIndex = (this.textIndex + 1) % this.data.texts.length;
            this.isPaused = true;
            setTimeout(() => {
                this.isPaused = false;
                this.animationId = setTimeout(() => this.typeLoop(), 500);
            }, this.pauseBetweenTexts);
            return;
        }

        this.charIndex += this.isDeleting ? -1 : 1;
        this.animationId = setTimeout(() => this.typeLoop(), this.isDeleting ? this.deletingSpeed : this.typingSpeed);
    }

    restart() {
        this.destroy();
        this.textIndex = 0;
        this.charIndex = 0;
        this.isDeleting = false;
        this.isPaused = false;
        this.render('');
        setTimeout(() => this.typeLoop(), 800);
    }

    updateTexts(newTexts) {
        this.data.texts = newTexts;
        this.restart();
    }

    destroy() {
        if (this.animationId) {
            clearTimeout(this.animationId);
            this.animationId = null;
        }
    }
}

// ===== PARTICLES (только на десктопе и без reduced-motion) =====
class ParticleSystem {
    constructor() {
        this.containerId = 'particles-js';
        this.isMobile = window.innerWidth <= 768;
        this.prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        this.initialized = false;
    }

    async initialize() {
        const box = document.getElementById(this.containerId);
        if (!box) return;
        if (this.isMobile || this.prefersReducedMotion) {
            box.style.display = 'none';
            return;
        }
        if (typeof particlesJS === 'undefined') await this.loadParticlesJS();
        if (typeof particlesJS !== 'undefined') {
            this.createParticles();
            this.initialized = true;
        }
    }

    loadParticlesJS() {
        return new Promise((resolve) => {
            const script = document.createElement('script');
            script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
            script.onload = resolve;
            script.onerror = () => { console.warn('Failed to load particles.js'); resolve(); };
            document.head.appendChild(script);
        });
    }

    createParticles() {
        particlesJS(this.containerId, {
            particles: {
                number: { value: 38, density: { enable: true, value_area: 400 } },
                color: { value: ["#ff265c", "#ff5f8a", "#ffffff"] },
                shape: { type: "edge" },
                opacity: { value: 0.55, random: true, anim: { enable: true, speed: 1, opacity_min: 0.15, sync: false } },
                size: { value: 2.4, random: true, anim: { enable: true, speed: 2, size_min: 1, sync: false } },
                line_linked: { enable: true, distance: 100, color: "#ff5f8a", opacity: 0.25, width: 1 },
                move: { enable: true, speed: 1.1, direction: "none", random: true, straight: false, out_mode: "bounce", bounce: true }
            },
            interactivity: {
                detect_on: "canvas",
                events: { onhover: { enable: true, mode: "grab" }, onclick: { enable: true, mode: "push" }, resize: true },
                modes: { grab: { distance: 120, line_linked: { opacity: 0.4 } }, push: { particles_nb: 3 } }
            },
            retina_detect: true
        });
    }

    destroy() {
        if (this.initialized) {
            document.querySelectorAll('.particles-js-canvas-el').forEach(c => c.remove());
            this.initialized = false;
        }
    }
}

// ===== ЗАЩИТА ОТ КОПИРОВАНИЯ =====
// Режимы (data-protect на .footer-wrapper или window.FooterConfig.protect):
//   "page"   — вся страница (по умолчанию)
//   "footer" — только сам футер
//   "off"    — выключено
// ВАЖНО: это защита на стороне браузера — она отсекает обычное копирование,
// выделение, ПКМ, перетаскивание и горячие клавиши, но не может остановить
// скриншот, «просмотр кода» через другие средства или скачивание HTML напрямую.
class ProtectionSystem {
    constructor(wrapper, data) {
        this.wrapper = wrapper;
        this.data = data;
        this.mode = (window.FooterConfig && window.FooterConfig.protect) || (wrapper && wrapper.dataset.protect) || 'page';
        this.toastEl = null;
        this.toastTimer = null;
        this.handlers = [];
    }

    scope() {
        return this.mode === 'footer' && this.wrapper ? this.wrapper : document;
    }

    inScope(target) {
        if (this.mode !== 'footer') return true;
        return !!(this.wrapper && target && this.wrapper.contains(target));
    }

    isEditable(el) {
        return !!(el && el.closest && el.closest('input, textarea, select, [contenteditable="true"]'));
    }

    on(target, type, fn, opts) {
        target.addEventListener(type, fn, opts);
        this.handlers.push([target, type, fn, opts]);
    }

    toast() {
        if (!this.toastEl) {
            this.toastEl = document.createElement('div');
            this.toastEl.className = 'ft-toast';
            this.toastEl.setAttribute('role', 'status');
            document.body.appendChild(this.toastEl);
        }
        this.toastEl.textContent = this.data.toast;
        this.toastEl.classList.add('show');
        clearTimeout(this.toastTimer);
        this.toastTimer = setTimeout(() => this.toastEl && this.toastEl.classList.remove('show'), 1600);
    }

    block(e) {
        if (!this.inScope(e.target) || this.isEditable(e.target)) return;
        e.preventDefault();
        e.stopPropagation();
        this.toast();
    }

    initialize() {
        if (this.mode === 'off') return;
        if (this.mode === 'page') document.documentElement.classList.add('ft-protect');
        if (this.wrapper) this.wrapper.dataset.protected = 'true';

        const root = document;
        ['contextmenu', 'copy', 'cut', 'dragstart'].forEach(t => this.on(root, t, e => this.block(e), true));

        this.on(root, 'selectstart', e => {
            if (!this.inScope(e.target) || this.isEditable(e.target)) return;
            e.preventDefault();
        }, true);

        // копирование через буфер → подменяем содержимое
        this.on(root, 'copy', e => {
            if (!this.inScope(e.target) || this.isEditable(e.target)) return;
            try { e.clipboardData.setData('text/plain', '\u00a9 Muhamed Ads'); } catch (_) {}
        }, true);

        this.on(root, 'keydown', e => {
            if (this.isEditable(e.target)) return;
            const k = (e.key || '').toLowerCase();
            const mod = e.ctrlKey || e.metaKey;
            const devtools = e.key === 'F12' ||
                (mod && e.shiftKey && ['i', 'j', 'c', 'k'].includes(k)) ||
                (e.metaKey && e.altKey && ['i', 'j', 'c', 'u'].includes(k));
            const shortcut = mod && !e.shiftKey && ['c', 'x', 'a', 's', 'u', 'p'].includes(k);
            if (devtools || shortcut) {
                e.preventDefault();
                e.stopPropagation();
                this.toast();
            }
        }, true);

        // PrintScreen: очищаем буфер обмена (скриншот остановить нельзя)
        this.on(root, 'keyup', e => {
            if (e.key === 'PrintScreen') {
                try { navigator.clipboard.writeText('\u00a9 Muhamed Ads'); } catch (_) {}
                this.toast();
            }
        }, true);

        document.querySelectorAll('img').forEach(img => img.setAttribute('draggable', 'false'));
    }

    destroy() {
        this.handlers.forEach(([t, type, fn, o]) => t.removeEventListener(type, fn, o));
        this.handlers = [];
        document.documentElement.classList.remove('ft-protect');
        if (this.wrapper) delete this.wrapper.dataset.protected;
        if (this.toastEl) { this.toastEl.remove(); this.toastEl = null; }
    }
}

// ===== ВСТРОЕННЫЙ ФОН (вкл / выкл) =====
// Состояние: data-bg на .footer-wrapper ("on" | "off"), по умолчанию "off".
// Выбор посетителя/владельца запоминается в localStorage ("ft-bg").
class BackgroundController {
    constructor(wrapper, data) {
        this.wrapper = wrapper;
        this.data = data;
        this.button = document.getElementById('bg-toggle');
        this.stateEl = document.getElementById('bg-state');
        this.key = 'ft-bg';
    }

    read() {
        try { const v = localStorage.getItem(this.key); if (v === 'on' || v === 'off') return v; } catch (_) {}
        return null;
    }

    initialize() {
        if (!this.wrapper) return;
        const visitorToggle = this.wrapper.dataset.bgToggle === 'show';
        const initial = (visitorToggle && this.read()) || (window.FooterConfig && window.FooterConfig.background) || this.wrapper.dataset.bg || 'off';
        this.set(initial === 'on', false);
        if (this.button && visitorToggle) this.button.addEventListener('click', () => this.toggle());
    }

    isOn() { return this.wrapper.dataset.bg === 'on'; }

    set(on, remember = true) {
        this.wrapper.dataset.bg = on ? 'on' : 'off';
        if (this.button) this.button.setAttribute('aria-pressed', on ? 'true' : 'false');
        if (this.stateEl) this.stateEl.textContent = on ? this.data.bgOn : this.data.bgOff;
        if (remember && this.wrapper.dataset.bgToggle === 'show') { try { localStorage.setItem(this.key, on ? 'on' : 'off'); } catch (_) {} }
    }

    toggle() { this.set(!this.isOn()); }
}

// ===== CONTROLLER =====
class FooterController {
    constructor() {
        this.typewriter = null;
        this.particleSystem = null;
        this.protection = null;
        this.background = null;
        this.isInitialized = false;
    }

    async initialize() {
        if (this.isInitialized) return;
        this.loadFontAwesome();
        this.typewriter = new TypewriterEffect();
        const wrapper = document.querySelector('.footer-wrapper');
        this.background = new BackgroundController(wrapper, this.typewriter.data);
        this.background.initialize();
        this.protection = new ProtectionSystem(wrapper, this.typewriter.data);
        this.protection.initialize();
        this.particleSystem = new ParticleSystem();
        await this.particleSystem.initialize();

        document.addEventListener('visibilitychange', () => {
            this.typewriter.isPaused = document.hidden;
        });
        this.isInitialized = true;
    }

    loadFontAwesome() {
        if (document.querySelector('script[src*="fontawesome"]')) return;
        const script = document.createElement('script');
        script.src = 'https://kit.fontawesome.com/87b9cd76ed.js';
        script.crossOrigin = 'anonymous';
        script.async = true;
        script.onerror = () => console.warn('FontAwesome failed to load');
        document.head.appendChild(script);
    }

    restartTypewriter() { if (this.typewriter) this.typewriter.restart(); }
    updateTypewriterTexts(t) { if (this.typewriter) this.typewriter.updateTexts(t); }

    destroy() {
        if (this.typewriter) this.typewriter.destroy();
        if (this.particleSystem) this.particleSystem.destroy();
        if (this.protection) this.protection.destroy();
        this.isInitialized = false;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    window.footerController = new FooterController();
    window.footerController.initialize();

    window.footerUtils = {
        restartTyping: () => window.footerController?.restartTypewriter(),
        updateTexts: (texts) => window.footerController?.updateTypewriterTexts(texts),
        setBackground: (on) => window.footerController?.background?.set(!!on),
        toggleBackground: () => window.footerController?.background?.toggle(),
        detectLanguage
    };

    window.addEventListener('beforeunload', () => window.footerController?.destroy());
});
