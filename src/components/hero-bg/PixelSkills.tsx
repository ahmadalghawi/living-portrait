import React, { useEffect, useRef } from 'react';
import { BRAND, DESKTOP_ZONES, SKILLS, prefersReducedMotion, runWhileVisible } from './shared';

const CELL = 8; // grid spacing in CSS px (fine enough for words to read)
const DOT = 1.5; // resting dot size
const GLOW_R = 150; // cursor glow radius
const WORD_EVERY = 3200; // ms between new words
const WORD_IN = 900, WORD_HOLD = 1900, WORD_OUT = 900;

type Word = { cells: number[]; delays: Float32Array; born: number };

/**
 * The brand's square dot, repeated as a field. Dots near the cursor glow green, and every few
 * seconds a group of dots lights up to spell one skill, holds, then lets go.
 */
export const PixelSkills: React.FC = () => {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const host = canvas.parentElement as HTMLElement;
    const reduced = prefersReducedMotion();

    let w = 0, h = 0, cols = 0, rows = 0, dpr = 1;
    let base: HTMLCanvasElement | null = null;
    let level = new Float32Array(0); // current light level per dot, 0..1
    const words: Word[] = [];
    let nextWordAt = performance.now() + 900;
    let wordI = 0, zoneI = 0;
    let mx = -9999, my = -9999;

    const baseAlpha = (x: number, y: number) => {
      const dx = (x - w / 2) / (w * 0.62), dy = (y - h * 0.52) / (h * 0.72);
      const d = Math.min(1, Math.hypot(dx, dy));
      return 0.025 + 0.12 * Math.pow(1 - d, 1.3);
    };

    function resize() {
      const r = host.getBoundingClientRect();
      w = r.width; h = r.height; dpr = Math.min(2, window.devicePixelRatio || 1);
      canvas!.width = Math.round(w * dpr); canvas!.height = Math.round(h * dpr);
      canvas!.style.width = `${w}px`; canvas!.style.height = `${h}px`;
      cols = Math.ceil(w / CELL); rows = Math.ceil(h / CELL);
      level = new Float32Array(cols * rows);
      words.length = 0;
      // the resting field is drawn once and copied every frame
      base = document.createElement('canvas');
      base.width = canvas!.width; base.height = canvas!.height;
      const b = base.getContext('2d')!;
      b.scale(dpr, dpr);
      b.fillStyle = BRAND.paper;
      for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) {
        const x = c * CELL + CELL / 2, y = r * CELL + CELL / 2;
        b.globalAlpha = baseAlpha(x, y);
        b.fillRect(x - DOT / 2, y - DOT / 2, DOT, DOT);
      }
    }

    // which grid cells fall inside the word, drawn in the brand's display face
    function spell(text: string, now: number): Word | null {
      if (w < 768) return null; // phones: no room beside the face, so only the cursor glow
      const z = DESKTOP_ZONES[zoneI++ % DESKTOP_ZONES.length];
      const zx = z.x * w, zy = z.y * h, zw = z.w * w, zh = z.h * h;
      const off = document.createElement('canvas');
      off.width = Math.ceil(zw); off.height = Math.ceil(zh);
      const o = off.getContext('2d')!;
      let size = 120;
      o.font = `800 ${size}px "Schibsted Grotesk", Arial, sans-serif`;
      size = Math.min(size, (size * zw * 0.96) / o.measureText(text).width, zh * 0.9);
      o.font = `800 ${size}px "Schibsted Grotesk", Arial, sans-serif`;
      o.textBaseline = 'middle';
      o.textAlign = z.align;
      o.fillStyle = '#fff';
      o.fillText(text, z.align === 'left' ? 0 : zw, zh / 2);
      const px = o.getImageData(0, 0, off.width, off.height).data;
      const cells: number[] = [];
      const c0 = Math.ceil(zx / CELL), c1 = Math.floor((zx + zw) / CELL);
      const r0 = Math.ceil(zy / CELL), r1 = Math.floor((zy + zh) / CELL);
      for (let r = r0; r <= r1; r++) for (let c = c0; c <= c1; c++) {
        const sx = Math.round(c * CELL + CELL / 2 - zx), sy = Math.round(r * CELL + CELL / 2 - zy);
        if (sx < 0 || sy < 0 || sx >= off.width || sy >= off.height) continue;
        if (px[(sy * off.width + sx) * 4 + 3] > 110 && r < rows && c < cols) cells.push(r * cols + c);
      }
      const delays = new Float32Array(cells.length);
      for (let i = 0; i < delays.length; i++) delays[i] = Math.random() * 0.45;
      return { cells, delays, born: now };
    }

    function draw(now: number) {
      ctx!.setTransform(1, 0, 0, 1, 0, 0);
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);
      if (base) ctx!.drawImage(base, 0, 0);
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      if (!reduced && now > nextWordAt) {
        const word = spell(SKILLS[wordI++ % SKILLS.length], now);
        if (word) words.push(word);
        nextWordAt = now + WORD_EVERY;
      }

      // target light per dot: words first, then the cursor glow
      const target = new Map<number, number>();
      for (let k = words.length - 1; k >= 0; k--) {
        const wd = words[k], age = now - wd.born, life = WORD_IN + WORD_HOLD + WORD_OUT;
        if (age > life + 600) { words.splice(k, 1); continue; }
        for (let i = 0; i < wd.cells.length; i++) {
          const t = age / 1000 - wd.delays[i];
          let v = 0;
          if (t > 0) {
            const tin = t / (WORD_IN / 1000);
            const tout = (age - WORD_IN - WORD_HOLD) / WORD_OUT - wd.delays[i];
            v = Math.min(1, tin) * (tout > 0 ? Math.max(0, 1 - tout) : 1);
          }
          const id = wd.cells[i];
          target.set(id, Math.max(target.get(id) || 0, v));
        }
      }
      if (mx > -999) {
        const c0 = Math.max(0, Math.floor((mx - GLOW_R) / CELL)), c1 = Math.min(cols - 1, Math.ceil((mx + GLOW_R) / CELL));
        const r0 = Math.max(0, Math.floor((my - GLOW_R) / CELL)), r1 = Math.min(rows - 1, Math.ceil((my + GLOW_R) / CELL));
        for (let r = r0; r <= r1; r++) for (let c = c0; c <= c1; c++) {
          const d = Math.hypot(c * CELL + CELL / 2 - mx, r * CELL + CELL / 2 - my);
          if (d < GLOW_R) {
            const id = r * cols + c, g = Math.pow(1 - d / GLOW_R, 2) * 0.55;
            target.set(id, Math.max(target.get(id) || 0, g));
          }
        }
      }

      // ease every lit dot toward its target, and draw the lit ones on top of the field
      ctx!.fillStyle = BRAND.green;
      const touched = new Set<number>(target.keys());
      for (let id = 0; id < level.length; id++) if (level[id] > 0.004) touched.add(id);
      for (const id of touched) {
        const t = target.get(id) || 0;
        level[id] += (t - level[id]) * (t > level[id] ? 0.22 : 0.08);
        const v = level[id];
        if (v < 0.01) { level[id] = 0; continue; }
        const c = id % cols, r = (id / cols) | 0;
        const x = c * CELL + CELL / 2, y = r * CELL + CELL / 2, s = DOT + v * 4.5;
        ctx!.globalAlpha = Math.min(1, 0.15 + v * 0.85);
        ctx!.fillRect(x - s / 2, y - s / 2, s, s);
      }
      ctx!.globalAlpha = 1;
    }

    const onMove = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect();
      mx = e.clientX - r.left; my = e.clientY - r.top;
    };
    const onLeave = () => { mx = my = -9999; };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(host);
    window.addEventListener('pointermove', onMove);
    document.addEventListener('pointerleave', onLeave);

    let stop = () => {};
    const start = () => {
      if (reduced) { draw(performance.now()); return; }
      stop = runWhileVisible(host, draw);
    };
    // wait for the display font, so the first word isn't spelled in a fallback face
    document.fonts.ready.then(start);

    return () => {
      stop();
      ro.disconnect();
      window.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerleave', onLeave);
    };
  }, []);

  return <canvas ref={ref} className="hero-bg-canvas" aria-hidden="true" />;
};
