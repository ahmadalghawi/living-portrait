import React, { useEffect, useRef } from 'react';
import { DESKTOP_ZONES, prefersReducedMotion, runWhileVisible } from './shared';

/** Short snippets in the spirit of the work behind this site. They type themselves, rest, then fade. */
const SNIPPETS = [
  `const ZONES = {
  hover: { nose: 'tongue', mouth: 'kiss' },
  tap: { brow: 'angry', chin: 'laugh' },
};`,
  `const leads = await gather(sources);
const scored = await score(leads, { cv });
return scored.filter((l) => l.score >= 50);`,
  `export function BrandMark({ size = 24 }) {
  return (
    <svg viewBox="15 7.5 34 49" height={size}>
      <rect x="27" y="8.5" width="10" height="10" />
    </svg>
  );
}`,
  `<Pressable onPress={startLesson}>
  <Text style={styles.cta}>Start lesson</Text>
</Pressable>`,
  `const reply = await gemini.ask({
  question,
  context: buildSiteContext(profile),
});`,
  `html = html.replace(
  '<script src="/registerSW.js">',
  '<script defer src="/registerSW.js">',
);`,
];

const KEYWORDS = /\b(const|await|return|export|function|async|import|from)\b/g;
const CHARS_PER_SEC = 34;
const HOLD = 2600, FADE = 700;

const escapeHtml = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const highlight = (s: string) => escapeHtml(s).replace(KEYWORDS, '<span class="code-kw">$1</span>');

type Block = { el: HTMLPreElement; zone: number; text: string; started: number };

/**
 * Faint code typing itself in the free corners of the hero, two blocks at a time.
 * Phones get one block at the top.
 */
export const LiveCode: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const layer = ref.current;
    if (!layer) return;
    const host = layer.parentElement as HTMLElement;
    const reduced = prefersReducedMotion();
    let snippetI = 0, zoneI = 0;
    const blocks: Block[] = [];

    const place = (el: HTMLElement, zone: number) => {
      const narrow = host.getBoundingClientRect().width < 768;
      if (narrow) {
        Object.assign(el.style, { left: '6%', right: '6%', top: '11%', textAlign: 'left' });
        return;
      }
      const z = DESKTOP_ZONES[zone];
      Object.assign(el.style, { top: `${z.y * 100}%`, textAlign: 'left' });
      if (z.align === 'left') Object.assign(el.style, { left: `${z.x * 100}%`, right: '' });
      else Object.assign(el.style, { right: `${(1 - z.x - z.w) * 100}%`, left: '' });
    };

    const spawn = (now: number) => {
      const el = document.createElement('pre');
      el.className = 'code-block';
      layer.appendChild(el);
      const zone = zoneI++ % DESKTOP_ZONES.length;
      place(el, zone);
      blocks.push({ el, zone, text: SNIPPETS[snippetI++ % SNIPPETS.length], started: now });
    };

    const draw = (now: number) => {
      const narrow = host.getBoundingClientRect().width < 768;
      const want = narrow ? 1 : 2;
      if (blocks.length < want) spawn(now);
      for (let i = blocks.length - 1; i >= 0; i--) {
        const b = blocks[i];
        const typeMs = (b.text.length / CHARS_PER_SEC) * 1000;
        const age = reduced ? typeMs : now - b.started;
        const shown = Math.min(b.text.length, Math.floor((age / 1000) * CHARS_PER_SEC));
        const typing = shown < b.text.length;
        const caretOn = typing || Math.floor(now / 530) % 2 === 0;
        b.el.innerHTML = highlight(b.text.slice(0, shown)) + (caretOn ? '<span class="code-caret"></span>' : '');
        const fadeAt = typeMs + HOLD;
        b.el.style.opacity = age > fadeAt ? String(Math.max(0, 1 - (age - fadeAt) / FADE)) : '1';
        if (!reduced && age > fadeAt + FADE) { b.el.remove(); blocks.splice(i, 1); }
      }
    };

    draw(performance.now());
    const stop = reduced ? () => {} : runWhileVisible(host, draw);
    return () => { stop(); blocks.forEach((b) => b.el.remove()); };
  }, []);

  return <div ref={ref} className="code-layer" aria-hidden="true" />;
};
