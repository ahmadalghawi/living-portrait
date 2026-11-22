import React, { useState } from 'react';
import { PixelSkills } from './PixelSkills';
import { SkillOrbit } from './SkillOrbit';
import { LiveCode } from './LiveCode';

export type HeroBg = 'pixels' | 'orbit' | 'code';

const OPTIONS: { id: HeroBg; label: string }[] = [
  { id: 'pixels', label: 'Pixel skills' },
  { id: 'orbit', label: 'Skill orbit' },
  { id: 'code', label: 'Live code' },
];

const fromUrl = (): HeroBg => {
  const v = new URLSearchParams(window.location.search).get('bg');
  return v === 'orbit' || v === 'code' ? v : 'pixels';
};

/**
 * The animated hero background. While the three options are being compared, a small switcher
 * sits at the bottom of the hero and `?bg=pixels|orbit|code` picks one from the address bar.
 * TEMPORARY: once one is chosen, keep only that component and remove the switcher.
 */
export const HeroBackground: React.FC = () => {
  const [bg, setBg] = useState<HeroBg>(fromUrl);

  const choose = (id: HeroBg) => {
    setBg(id);
    const url = new URL(window.location.href);
    url.searchParams.set('bg', id);
    window.history.replaceState(null, '', url);
  };

  return (
    <>
      {bg !== 'pixels' && <div className="hero-field" aria-hidden="true" />}
      {bg === 'pixels' && <PixelSkills />}
      {bg === 'orbit' && <SkillOrbit />}
      {bg === 'code' && <LiveCode />}

      <div className="bg-switcher" role="group" aria-label="Compare hero backgrounds">
        {OPTIONS.map((o) => (
          <button key={o.id} type="button" onClick={() => choose(o.id)} aria-pressed={bg === o.id}>
            {o.label}
          </button>
        ))}
      </div>
    </>
  );
};
