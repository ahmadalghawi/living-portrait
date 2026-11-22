import React, { useEffect, useRef } from 'react';
import { SKILLS, prefersReducedMotion, runWhileVisible } from './shared';

type Ring = { tilt: number; rx: number; ry: number; speed: number; skills: string[] };

/**
 * Skills circle the head on two tall, slightly tilted loops. On one side a label passes behind the
 * head (smaller, fainter); on the other it comes in front. Hovering a label lights it up.
 */
export const SkillOrbit: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const layer = ref.current;
    if (!layer) return;
    const host = layer.parentElement as HTMLElement;
    const reduced = prefersReducedMotion();
    const half = Math.ceil(SKILLS.length / 2);
    const rings: Ring[] = [
      // tall loops that hug the head and stay in the gap between the two words
      { tilt: 0.14, rx: 0.175, ry: 0.38, speed: 0.1, skills: SKILLS.slice(0, half) },
      { tilt: -0.18, rx: 0.15, ry: 0.33, speed: -0.075, skills: SKILLS.slice(half) },
    ];

    const labels: { el: HTMLSpanElement; ring: Ring; phase: number }[] = [];
    for (const ring of rings) {
      ring.skills.forEach((name, i) => {
        const el = document.createElement('span');
        el.className = 'orbit-label';
        el.textContent = name;
        layer.appendChild(el);
        labels.push({ el, ring, phase: (i / ring.skills.length) * Math.PI * 2 });
      });
    }

    let cx = 0, cy = 0, scaleX = 0, scaleY = 0;
    const measure = () => {
      const hr = host.getBoundingClientRect();
      const face = document.getElementById('magnetWrap')?.getBoundingClientRect();
      cx = face ? face.left - hr.left + face.width / 2 : hr.width / 2;
      cy = face ? face.top - hr.top + face.height * 0.5 : hr.height / 2;
      const narrow = hr.width < 768;
      scaleX = hr.width * (narrow ? 1.95 : 1);
      scaleY = hr.height * (narrow ? 0.72 : 1);
    };

    const draw = (now: number) => {
      measure();
      const t = reduced ? 0 : now / 1000;
      for (const { el, ring, phase } of labels) {
        const a = phase + t * ring.speed;
        const ex = Math.cos(a) * ring.rx * scaleX, ey = Math.sin(a) * ring.ry * scaleY;
        const x = cx + ex * Math.cos(ring.tilt) - ey * Math.sin(ring.tilt);
        const y = cy + ex * Math.sin(ring.tilt) + ey * Math.cos(ring.tilt);
        // right half of each loop is in front, left half behind, so a label never sits on the face
        const depth = Math.cos(a);
        const s = 0.82 + 0.22 * depth;
        el.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%) scale(${s})`;
        el.style.opacity = String(0.38 + 0.62 * ((depth + 1) / 2));
        el.style.zIndex = depth > 0 ? '15' : '5';
      }
    };

    measure();
    draw(performance.now());
    const stop = reduced ? () => {} : runWhileVisible(host, draw);
    const onResize = () => draw(performance.now());
    window.addEventListener('resize', onResize);
    return () => {
      stop();
      window.removeEventListener('resize', onResize);
      labels.forEach(({ el }) => el.remove());
    };
  }, []);

  return <div ref={ref} className="orbit-layer" aria-hidden="true" />;
};
