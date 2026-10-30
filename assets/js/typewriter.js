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
        if (!h || !m || !s) return;
        const pad = n => (n < 10 ? '0' : '') + n;
        const tick = () => {
            const d = new Date(Date.now() + 3 * 3600 * 1000);
            h.textContent = pad(d.getUTCHours());
            m.textContent = pad(d.getUTCMinutes());
            const sec = d.getUTCSeconds();
            s.textContent = pad(sec);
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
