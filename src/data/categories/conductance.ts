import type { Category } from '../../lib/types';
import { linear } from '../../lib/unitHelpers';

export const conductance: Category = {
  id: 'conductance',
  name: 'Condutância',
  group: 'electricity',
  baseUnitId: 'S',
  units: [
    linear('S', 'S', 'Siemens', 1),
    linear('mS', 'mS', 'Milisiemens', 0.001),
    linear('uS', 'µS', 'Microsiemens', 1e-6),
    linear('nS', 'nS', 'Nanosiemens', 1e-9),
    linear('mho', '℧', 'Mho', 1),
  ],
};
