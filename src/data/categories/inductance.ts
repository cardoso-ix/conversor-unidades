import type { Category } from '../../lib/types';
import { linear } from '../../lib/unitHelpers';

export const inductance: Category = {
  id: 'inductance',
  name: 'Indutância',
  group: 'electricity',
  baseUnitId: 'H',
  units: [
    linear('H', 'H', 'Henry', 1),
    linear('mH', 'mH', 'Milihenry', 0.001),
    linear('uH', 'µH', 'Microhenry', 1e-6),
    linear('nH', 'nH', 'Nanohenry', 1e-9),
  ],
};
