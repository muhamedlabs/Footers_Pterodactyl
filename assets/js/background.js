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
