import type { Category } from '../../lib/types';
import { linear } from '../../lib/unitHelpers';

export const luminousIntensity: Category = {
  id: 'luminousIntensity',
  name: 'Intensidade luminosa',
  group: 'fundamental',
  baseUnitId: 'cd',
  units: [
    linear('cd', 'cd', 'Candela', 1),
    linear('mcd', 'mcd', 'Milicandela', 0.001),
    linear('kcd', 'kcd', 'Quilocandela', 1000),
  ],
};
