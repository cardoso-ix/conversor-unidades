import type { Category } from '../../lib/types';
import { linear } from '../../lib/unitHelpers';

export const capacitance: Category = {
  id: 'capacitance',
  name: 'Capacitância',
  group: 'electricity',
  baseUnitId: 'F',
  units: [
    linear('F', 'F', 'Farad', 1),
    linear('mF', 'mF', 'Milifarad', 0.001),
    linear('uF', 'µF', 'Microfarad', 1e-6),
    linear('nF', 'nF', 'Nanofarad', 1e-9),
    linear('pF', 'pF', 'Picofarad', 1e-12),
  ],
};
