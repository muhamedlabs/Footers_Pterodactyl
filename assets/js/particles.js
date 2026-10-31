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
                    ctx.strokeStyle = 'rgba(253,51,89,' + ((1 - d / link) * 0.42).toFixed(3) + ')';
                    ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
                }
            }
            const md = Math.hypot(a.x - this.mouse.x, a.y - this.mouse.y);
            if (md < 150) {
                ctx.strokeStyle = 'rgba(254,103,131,' + ((1 - md / 150) * 0.8).toFixed(3) + ')';
                ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(this.mouse.x, this.mouse.y); ctx.stroke();
            }
        }

        for (const n of nodes) {
            const tw = 0.55 + 0.45 * Math.sin(t * n.sp + n.ph);
            if (n.big) {
                const g = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, 11);
                g.addColorStop(0, 'rgba(253,24,67,' + (0.6 * tw).toFixed(3) + ')');
                g.addColorStop(1, 'rgba(253,24,67,0)');
                ctx.fillStyle = g;
                ctx.beginPath(); ctx.arc(n.x, n.y, 11, 0, 6.2832); ctx.fill();
            }
            ctx.fillStyle = 'rgba(' + (n.big ? 254 : 254) + ',' + (n.big ? 80 : 118) + ',' + (n.big ? 113 : 144) + ',' + (0.45 + 0.5 * tw).toFixed(3) + ')';
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
