function detectLanguage() {
    const userLang = navigator.language || navigator.userLanguage || 'ru';
    const langCode = userLang.split('-')[0].toLowerCase();

    if (langCode === 'uk') {
        return {
            texts: [
                "Креативні YouTube-канали та IT-проєкти",
                "Технології, ідеї й бачення Андрія Мухамеда",
                "Світ Андрія Мухамеда",
                "Ідеї, що стають проєктами",
                "Долучайся до нашої спільноти"
            ],
            tagline: "Креативна та технологічна мережа",
            brand: "Мухамед",
            status: "Мережа активна",
            buttonText: "Є — посилання"
        };
    }
    if (langCode === 'en') {
        return {
            texts: [
                "Creative YouTube channels & IT projects",
                "Technology, ideas and the vision of Andrey Muhamed",
                "The world of Andrey Muhamed",
                "Ideas that become projects",
                "Join our community"
            ],
            tagline: "Creative & Technology Network",
            brand: "Muhamed",
            status: "Network online",
            buttonText: "Multilink"
        };
    }
    return {
        texts: [
            "Креативные YouTube-каналы и IT-проекты",
            "Технологии, идеи и видение Андрея Мухамеда",
            "Мир Андрея Мухамеда",
            "Идеи, которые становятся проектами",
            "Присоединяйся к нашему сообществу"
        ],
        tagline: "Креативная и технологическая сеть",
        brand: "Мухамед",
        status: "Сеть активна",
        buttonText: "Мультиссылка"
    };
}

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
        if (this.titleElement) {
            this.titleElement.innerHTML = this.data.brand + ' <b>Ads</b>';
            this.titleElement.dataset.text = this.data.brand + ' Ads';
        }
        if (this.buttonTextElement) {
            this.buttonTextElement.textContent = this.data.buttonText;
            const btn = this.buttonTextElement.closest('a');
        }
        const sub = document.getElementById('brand-sub');
        if (sub) sub.textContent = this.data.tagline;

        const status = document.getElementById('meta-status');
        if (status) status.textContent = this.data.status;
        this.startClock();

        if (this.prefersReducedMotion) {
            this.render(this.data.texts[0]);
            return;
        }
        this.render('');
        const start = () => setTimeout(() => this.typeLoop(), 800);
        if (document.fonts && document.fonts.load) {
            document.fonts.load('16px muhamedlads').then(start, start);
        } else {
            start();
        }
    }

    startClock() {
        const h = document.getElementById('meta-h');
        const m = document.getElementById('meta-m');
        const s = document.getElementById('meta-s');
        const bar = document.getElementById('meta-bar');
        if (!h || !m || !s) return;
        const pad = n => (n < 10 ? '0' : '') + n;
        const tick = () => {
            const d = new Date(Date.now() + 3 * 3600 * 1000);
            h.textContent = pad(d.getUTCHours());
            m.textContent = pad(d.getUTCMinutes());
            const sec = d.getUTCSeconds();
            s.textContent = pad(sec);
            if (bar) {
                bar.style.transition = sec === 0 ? 'none' : '';
                bar.style.transform = 'scaleX(' + ((sec + 1) / 60).toFixed(4) + ')';
            }
        };
        tick();
        clearInterval(this.clock);
        this.clock = setInterval(tick, 1000);
    }

    longest() {
        return this.data.texts.reduce((a, b) => (b.length > a.length ? b : a), '');
    }

    render(text) {
        if (!this.liveText) {
            this.typingElement.innerHTML = '';
            const sizer = document.createElement('span');
            sizer.className = 'ft-sizer';
            sizer.setAttribute('aria-hidden', 'true');
            sizer.textContent = this.longest();
            const live = document.createElement('span');
            live.className = 'ft-live';
            this.liveText = document.createElement('span');
            this.liveText.className = 'ft-t';
            const cursor = document.createElement('span');
            cursor.className = 'typing-cursor';
            cursor.setAttribute('aria-hidden', 'true');
            live.appendChild(this.liveText);
            live.appendChild(cursor);
            this.typingElement.appendChild(sizer);
            this.typingElement.appendChild(live);
        }
        this.liveText.textContent = text;
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
        if (this.clock) { clearInterval(this.clock); this.clock = null; }
        if (this.animationId) {
            clearTimeout(this.animationId);
            this.animationId = null;
        }
    }
}

class ParticleSystem {
    constructor() {
        this.box = document.getElementById('particles-js');
        this.reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        this.nodes = [];
        this.w = 0;
        this.h = 0;
        this.dpr = 1;
        this.raf = 0;
        this.last = 0;
        this.visible = true;
        this.mouse = { x: -999, y: -999 };
        this.link = 125;
        this.initialized = false;
    }

    async initialize() {
        if (!this.box) return;
        this.canvas = document.createElement('canvas');
        this.canvas.setAttribute('aria-hidden', 'true');
        this.canvas.style.cssText = 'display:block;width:100%;height:100%';
        this.box.appendChild(this.canvas);
        this.ctx = this.canvas.getContext('2d');
        if (!this.ctx) return;
        this.initialized = true;

        this.resize();
        this.ro = new ResizeObserver(() => { this.resize(); if (this.reduced) this.draw(0); });
        this.ro.observe(this.box);

        if (this.reduced) { this.draw(0); return; }

        this.io = new IntersectionObserver(es => {
            this.visible = es[0].isIntersecting;
            this.visible ? this.start() : this.stop();
        });
        this.io.observe(this.box);

        this.onVis = () => (document.hidden ? this.stop() : (this.visible && this.start()));
        document.addEventListener('visibilitychange', this.onVis);

        const host = this.box.closest('.footer') || this.box;
        this.host = host;
        this.onMove = e => {
            const r = this.box.getBoundingClientRect();
            this.mouse.x = e.clientX - r.left;
            this.mouse.y = e.clientY - r.top;
        };
        this.onLeave = () => { this.mouse.x = this.mouse.y = -999; };
        host.addEventListener('pointermove', this.onMove, { passive: true });
        host.addEventListener('pointerleave', this.onLeave, { passive: true });
        this.start();
    }

    resize() {
        const w = this.box.clientWidth, h = this.box.clientHeight;
        if (!w || !h) return;
        this.dpr = Math.min(window.devicePixelRatio || 1, 2);
        this.w = w;
        this.h = h;
        this.canvas.width = Math.round(w * this.dpr);
        this.canvas.height = Math.round(h * this.dpr);
        const want = Math.max(14, Math.min(70, Math.round((w * h) / (w < 520 ? 7000 : 8500))));
        while (this.nodes.length < want) this.nodes.push(this.makeNode());
        this.nodes.length = want;
        this.nodes.forEach(n => { n.x = Math.min(n.x, w); n.y = Math.min(n.y, h); });
    }

    makeNode() {
        const a = Math.random() * Math.PI * 2, s = 0.05 + Math.random() * 0.2;
        const big = Math.random() < 0.16;
        return {
            x: Math.random() * (this.w || 400), y: Math.random() * (this.h || 120),
            vx: Math.cos(a) * s, vy: Math.sin(a) * s,
            r: big ? 2.2 + Math.random() * 1.2 : 0.9 + Math.random() * 1.1,
            big, ph: Math.random() * 6.28, sp: 0.0006 + Math.random() * 0.0012
        };
    }

    start() { if (!this.raf && this.initialized && !this.reduced) { this.last = performance.now(); this.raf = requestAnimationFrame(t => this.tick(t)); } }
    stop() { if (this.raf) { cancelAnimationFrame(this.raf); this.raf = 0; } }

    tick(t) {
        const dt = Math.min(3, (t - this.last) / 16.67) || 1;
        this.last = t;
        const { w, h } = this;
        for (const n of this.nodes) {
            n.x += n.vx * dt; n.y += n.vy * dt;
            if (n.x < 0 || n.x > w) { n.vx *= -1; n.x = Math.max(0, Math.min(w, n.x)); }
            if (n.y < 0 || n.y > h) { n.vy *= -1; n.y = Math.max(0, Math.min(h, n.y)); }
        }
        this.draw(t);
        this.raf = requestAnimationFrame(tt => this.tick(tt));
    }

    draw(t) {
        const ctx = this.ctx, { w, h, nodes, link } = this;
        ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
        ctx.clearRect(0, 0, w, h);
        ctx.lineWidth = 1;

        for (let i = 0; i < nodes.length; i++) {
            const a = nodes[i];
            for (let k = i + 1; k < nodes.length; k++) {
                const b = nodes[k], dx = a.x - b.x, dy = a.y - b.y, d = Math.hypot(dx, dy);
                if (d < link) {
                    ctx.strokeStyle = 'rgba(255,70,110,' + ((1 - d / link) * 0.42).toFixed(3) + ')';
                    ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
                }
            }
            const md = Math.hypot(a.x - this.mouse.x, a.y - this.mouse.y);
            if (md < 150) {
                ctx.strokeStyle = 'rgba(255,120,150,' + ((1 - md / 150) * 0.8).toFixed(3) + ')';
                ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(this.mouse.x, this.mouse.y); ctx.stroke();
            }
        }

        for (const n of nodes) {
            const tw = 0.55 + 0.45 * Math.sin(t * n.sp + n.ph);
            if (n.big) {
                const g = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, 11);
                g.addColorStop(0, 'rgba(255,38,92,' + (0.6 * tw).toFixed(3) + ')');
                g.addColorStop(1, 'rgba(255,38,92,0)');
                ctx.fillStyle = g;
                ctx.beginPath(); ctx.arc(n.x, n.y, 11, 0, 6.2832); ctx.fill();
            }
            ctx.fillStyle = 'rgba(255,' + (n.big ? 95 : 130) + ',' + (n.big ? 138 : 165) + ',' + (0.45 + 0.5 * tw).toFixed(3) + ')';
            ctx.beginPath(); ctx.arc(n.x, n.y, n.r, 0, 6.2832); ctx.fill();
        }
    }

    destroy() {
        this.stop();
        if (this.ro) this.ro.disconnect();
        if (this.io) this.io.disconnect();
        if (this.onVis) document.removeEventListener('visibilitychange', this.onVis);
        if (this.host) {
            this.host.removeEventListener('pointermove', this.onMove);
            this.host.removeEventListener('pointerleave', this.onLeave);
        }
        if (this.canvas) this.canvas.remove();
        this.initialized = false;
    }
}

class ProtectionSystem {
    constructor(wrapper, data) {
        this.wrapper = wrapper;
        this.data = data;
        const cfg = (window.FooterConfig && window.FooterConfig.protect) || (wrapper && wrapper.dataset.protect) || 'footer';
        // Захист працює ТІЛЬКИ в футері (або вимкнений повністю).
        this.mode = cfg === 'off' ? 'off' : 'footer';
        this.handlers = [];
    }

    inScope(target) {
        const el = target && target.nodeType === 3 ? target.parentElement : target;
        return !!(this.wrapper && el && this.wrapper.contains(el));
    }

    isEditable(el) {
        return !!(el && el.closest && el.closest('input, textarea, select, [contenteditable="true"]'));
    }

    on(target, type, fn, opts) {
        target.addEventListener(type, fn, opts);
        this.handlers.push([target, type, fn, opts]);
    }

    block(e) {
        if (!this.inScope(e.target) || this.isEditable(e.target)) return;
        e.preventDefault();
        e.stopPropagation();
    }

    initialize() {
        if (this.mode === 'off' || !this.wrapper) return;
        this.wrapper.dataset.protected = 'true';

        const root = document;
        ['contextmenu', 'copy', 'cut', 'dragstart'].forEach(t => this.on(root, t, e => this.block(e), true));

        this.on(root, 'selectstart', e => {
            if (!this.inScope(e.target) || this.isEditable(e.target)) return;
            e.preventDefault();
        }, true);

        this.on(root, 'copy', e => {
            if (!this.inScope(e.target) || this.isEditable(e.target)) return;
            try { e.clipboardData.setData('text/plain', ''); } catch (_) { }
        }, true);

        // Гарячі клавіші блокуються лише коли фокус усередині футера.
        this.on(root, 'keydown', e => {
            if (!this.inScope(e.target) || this.isEditable(e.target)) return;
            const mod = e.ctrlKey || e.metaKey;
            const k = (e.key || '').toLowerCase();
            if (mod && !e.shiftKey && ['c', 'x', 'a'].includes(k)) {
                e.preventDefault();
                e.stopPropagation();
            }
        }, true);

        this.wrapper.querySelectorAll('img').forEach(img => img.setAttribute('draggable', 'false'));
    }

    destroy() {
        this.handlers.forEach(([t, type, fn, o]) => t.removeEventListener(type, fn, o));
        this.handlers = [];
        if (this.wrapper) delete this.wrapper.dataset.protected;
    }
}

class BackgroundController {
    constructor(wrapper, data) {
        this.wrapper = wrapper;
        this.data = data;
        this.button = document.getElementById('bg-toggle');
        this.stateEl = document.getElementById('bg-state');
        this.key = 'ft-bg';
    }

    read() {
        try { const v = localStorage.getItem(this.key); if (v === 'on' || v === 'off') return v; } catch (_) { }
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
        if (remember && this.wrapper.dataset.bgToggle === 'show') { try { localStorage.setItem(this.key, on ? 'on' : 'off'); } catch (_) { } }
    }

    toggle() { this.set(!this.isOn()); }
}

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
        this.detectSurface(wrapper);
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

    detectSurface(wrapper) {
        if (!wrapper || wrapper.dataset.surface) return;
        let el = wrapper.parentElement, rgb = null;
        while (el) {
            const cs = getComputedStyle(el);
            if (cs.backgroundImage && cs.backgroundImage !== 'none') { rgb = [0, 0, 0]; break; }
            const m = cs.backgroundColor.match(/[\d.]+/g);
            if (m && (m.length < 4 || parseFloat(m[3]) > 0.5)) { rgb = m.map(Number); break; }
            el = el.parentElement;
        }
        if (!rgb) rgb = [255, 255, 255];
        const lum = (0.299 * rgb[0] + 0.587 * rgb[1] + 0.114 * rgb[2]) / 255;
        wrapper.dataset.surface = lum > 0.5 ? 'light' : 'dark';
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
