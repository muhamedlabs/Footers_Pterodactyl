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

function startFooter() {
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
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', startFooter);
} else {
    startFooter();
}
