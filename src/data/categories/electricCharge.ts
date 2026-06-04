import type { Category } from '../../lib/types';
import { linear } from '../../lib/unitHelpers';

export const electricCharge: Category = {
  id: 'electricCharge',
  name: 'Carga elétrica',
  group: 'electricity',
  baseUnitId: 'C',
  units: [
    linear('C', 'C', 'Coulomb', 1),
    linear('mC', 'mC', 'Milicoulomb', 0.001),
    linear('uC', 'µC', 'Microcoulomb', 1e-6),
    linear('nC', 'nC', 'Nanocoulomb', 1e-9),
    linear('pC', 'pC', 'Picocoulomb', 1e-12),
    linear('Ah', 'Ah', 'Ampere-hora', 3600),
    linear('mAh', 'mAh', 'Miliampere-hora', 3.6),
    linear('e', 'e', 'Carga elementar (e)', 1.602176634e-19),
  ],
};
