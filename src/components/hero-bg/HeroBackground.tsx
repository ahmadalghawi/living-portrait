import React from 'react';
import { PixelSkills } from './PixelSkills';
import { SkillOrbit } from './SkillOrbit';

/**
 * The animated hero background: a field of square dots that glows under the cursor and spells
 * one skill at a time, plus skill labels looping around the head. Edit the skills in `shared.ts`.
 */
export const HeroBackground: React.FC = () => (
  <>
    <PixelSkills />
    <SkillOrbit />
  </>
);
