import type { Category } from '../../lib/types';
import { linear } from '../../lib/unitHelpers';

export const specificHeat: Category = {
  id: 'specificHeat',
  name: 'Calor específico',
  group: 'thermodynamics',
  baseUnitId: 'J_kgK',
  units: [
    linear('J_kgK', 'J/(kg·K)', 'Joule por quilograma-kelvin', 1),
    linear('kJ_kgK', 'kJ/(kg·K)', 'Quilojoule por quilograma-kelvin', 1000),
    linear('cal_gC', 'cal/(g·°C)', 'Caloria por grama-grau Celsius', 4184),
    linear('kcal_kgC', 'kcal/(kg·°C)', 'Quilocaloria por quilograma-grau Celsius', 4184),
    linear('BTU_lbF', 'BTU/(lb·°F)', 'BTU por libra-grau Fahrenheit', 4186.8),
    linear('J_gK', 'J/(g·K)', 'Joule por grama-kelvin', 1000),
  ],
};
