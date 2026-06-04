import type { Category } from '../../lib/types';
import { linear } from '../../lib/unitHelpers';

export const specificEntropy: Category = {
  id: 'specificEntropy',
  name: 'Entropia específica',
  group: 'thermodynamics',
  baseUnitId: 'J_kgK_ent',
  units: [
    linear('J_kgK_ent', 'J/(kg·K)', 'Joule por quilograma-kelvin', 1),
    linear('kJ_kgK_ent', 'kJ/(kg·K)', 'Quilojoule por quilograma-kelvin', 1000),
    linear('cal_gK', 'cal/(g·K)', 'Caloria por grama-kelvin', 4184),
    linear('BTU_lbR', 'BTU/(lb·°R)', 'BTU por libra-grau Rankine', 4186.8),
  ],
};
