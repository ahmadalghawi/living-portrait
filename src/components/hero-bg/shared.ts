/** Skills shown by the hero backgrounds. Edit this list to show your own. */
export const SKILLS = [
  'React',
  'Next.js',
  'React Native',
  'TypeScript',
  'Node.js',
  'Firebase',
  'Expo',
  'MySQL',
  'AI agents',
  'Tailwind',
  'Figma',
];

export const BRAND = {
  ink: '#0E1726',
  paper: '#F3F6F2',
  green: '#3EE0A0',
  cyan: '#2CC9E0',
};

/** Free areas of the hero (fractions of its size), away from the face, the name and the bottom bar. */
export type Zone = { x: number; y: number; w: number; h: number; align: 'left' | 'right' };
export const DESKTOP_ZONES: Zone[] = [
  { x: 0.04, y: 0.14, w: 0.27, h: 0.2, align: 'left' },
  { x: 0.69, y: 0.62, w: 0.27, h: 0.13, align: 'right' },
  { x: 0.69, y: 0.14, w: 0.27, h: 0.2, align: 'right' },
  { x: 0.04, y: 0.62, w: 0.27, h: 0.13, align: 'left' },
];

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Calls `frame` on every animation frame while the element is on screen and the tab is visible.
 * Returns a cleanup function.
 */
export function runWhileVisible(el: Element, frame: (now: number) => void): () => void {
  let raf = 0;
  let onScreen = true;
  const tick = (now: number) => {
    frame(now);
    raf = requestAnimationFrame(tick);
  };
  const update = () => {
    const shouldRun = onScreen && !document.hidden;
    if (shouldRun && !raf) raf = requestAnimationFrame(tick);
    if (!shouldRun && raf) { cancelAnimationFrame(raf); raf = 0; }
  };
  const io = new IntersectionObserver(([entry]) => { onScreen = entry.isIntersecting; update(); });
  io.observe(el);
  document.addEventListener('visibilitychange', update);
  update();
  return () => {
    io.disconnect();
    document.removeEventListener('visibilitychange', update);
    if (raf) cancelAnimationFrame(raf);
  };
}
