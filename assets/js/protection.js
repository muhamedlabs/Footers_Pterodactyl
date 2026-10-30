class ProtectionSystem {
    constructor(wrapper, data) {
        this.wrapper = wrapper;
        this.data = data;
        this.mode = (window.FooterConfig && window.FooterConfig.protect) || (wrapper && wrapper.dataset.protect) || 'page';
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

    block(e) {
        if (!this.inScope(e.target) || this.isEditable(e.target)) return;
        e.preventDefault();
        e.stopPropagation();
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

        this.on(root, 'copy', e => {
            if (!this.inScope(e.target) || this.isEditable(e.target)) return;
            try { e.clipboardData.setData('text/plain', ''); } catch (_) {}
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
            }
        }, true);

        this.on(root, 'keyup', e => {
            if (e.key === 'PrintScreen') {
                try { navigator.clipboard.writeText(''); } catch (_) {}
            }
        }, true);

        document.querySelectorAll('img').forEach(img => img.setAttribute('draggable', 'false'));
    }

    destroy() {
        this.handlers.forEach(([t, type, fn, o]) => t.removeEventListener(type, fn, o));
        this.handlers = [];
        document.documentElement.classList.remove('ft-protect');
        if (this.wrapper) delete this.wrapper.dataset.protected;
    }
}
