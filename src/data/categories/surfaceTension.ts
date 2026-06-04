import type { Category } from '../../lib/types';
import { linear } from '../../lib/unitHelpers';

export const surfaceTension: Category = {
  id: 'surfaceTension',
  name: 'Tensão superficial',
  group: 'mechanics',
  baseUnitId: 'N_m',
  units: [
    linear('N_m', 'N/m', 'Newton por metro', 1),
    linear('dyn_cm', 'dyn/cm', 'Dina por centímetro', 0.001),
    linear('mN_m', 'mN/m', 'Milinewton por metro', 0.001),
    linear('lbf_in', 'lbf/pol', 'Libra-força por polegada', 175.126835),
  ],
};
