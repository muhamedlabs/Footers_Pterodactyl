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
            buttonText: "Мультипосилання"
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
            buttonText: "Multilink"
        };
    }
    return {
        texts: [
            "Отличные YouTube-каналы, IT-проекты и индивидуальные планы Андрея Мухамеда.",
            "Креативные YouTube-каналы, смелые IT-проекты и видение Андрея Мухамеда.",
            "Где объединяются YouTube, технологии и идеи — мир Андрея Мухамеда."
        ],
        brand: "Мухамед",
        buttonText: "Мультиссылка"
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

// ===== CONTROLLER =====
class FooterController {
    constructor() {
        this.typewriter = null;
        this.particleSystem = null;
        this.isInitialized = false;
    }

    async initialize() {
        if (this.isInitialized) return;
        this.loadFontAwesome();
        this.typewriter = new TypewriterEffect();
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
        this.isInitialized = false;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    window.footerController = new FooterController();
    window.footerController.initialize();

    window.footerUtils = {
        restartTyping: () => window.footerController?.restartTypewriter(),
        updateTexts: (texts) => window.footerController?.updateTypewriterTexts(texts),
        detectLanguage
    };

    window.addEventListener('beforeunload', () => window.footerController?.destroy());
});
