import type { Category } from '../../lib/types';
import { linear } from '../../lib/unitHelpers';

export const magneticField: Category = {
  id: 'magneticField',
  name: 'Campo magnético',
  group: 'electricity',
  baseUnitId: 'T',
  units: [
    linear('T', 'T', 'Tesla', 1),
    linear('mT', 'mT', 'Militesla', 0.001),
    linear('uT', 'µT', 'Microtesla', 1e-6),
    linear('nT', 'nT', 'Nanotesla', 1e-9),
    linear('G', 'G', 'Gauss', 1e-4),
    linear('kG', 'kG', 'Quilogauss', 0.1),
  ],
};
