import type { Category } from '../../lib/types';
import { linear } from '../../lib/unitHelpers';

export const kinematicViscosity: Category = {
  id: 'kinematicViscosity',
  name: 'Viscosidade cinemática',
  group: 'mechanics',
  baseUnitId: 'm2_s',
  units: [
    linear('m2_s', 'm²/s', 'Metro quadrado por segundo', 1),
    linear('St', 'St', 'Stokes', 1e-4),
    linear('cSt', 'cSt', 'Centistokes', 1e-6),
    linear('mm2_s', 'mm²/s', 'Milímetro quadrado por segundo', 1e-6),
    linear('ft2_s', 'ft²/s', 'Pé quadrado por segundo', 0.09290304),
  ],
};
