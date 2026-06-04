import type { Category } from '../../lib/types';
import { linear } from '../../lib/unitHelpers';

export const magneticFlux: Category = {
  id: 'magneticFlux',
  name: 'Fluxo magnético',
  group: 'electricity',
  baseUnitId: 'Wb',
  units: [
    linear('Wb', 'Wb', 'Weber', 1),
    linear('mWb', 'mWb', 'Miliweber', 0.001),
    linear('uWb', 'µWb', 'Microweber', 1e-6),
    linear('Mx', 'Mx', 'Maxwell', 1e-8),
    linear('kMx', 'kMx', 'Quilomaxwell', 1e-5),
  ],
};
