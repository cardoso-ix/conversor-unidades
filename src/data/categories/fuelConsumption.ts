import type { Category } from '../../lib/types';
import { custom } from '../../lib/unitHelpers';

const MPG_US_FACTOR = 235.214583;
const MPG_UK_FACTOR = 282.480936;

export const fuelConsumption: Category = {
  id: 'fuelConsumption',
  name: 'Consumo de combustível',
  group: 'everyday',
  baseUnitId: 'L_100km',
  units: [
    custom(
      'L_100km',
      'L/100 km',
      'Litros por 100 km',
      (v) => v,
      (v) => v,
    ),
    custom(
      'km_L',
      'km/L',
      'Quilômetros por litro',
      (v) => (v === 0 ? Infinity : 100 / v),
      (v) => (v === 0 ? Infinity : 100 / v),
    ),
    custom(
      'mpg_us',
      'mpg US',
      'Milhas por galão (EUA)',
      (v) => (v === 0 ? Infinity : MPG_US_FACTOR / v),
      (v) => (v === 0 ? Infinity : MPG_US_FACTOR / v),
    ),
    custom(
      'mpg_uk',
      'mpg UK',
      'Milhas por galão (UK)',
      (v) => (v === 0 ? Infinity : MPG_UK_FACTOR / v),
      (v) => (v === 0 ? Infinity : MPG_UK_FACTOR / v),
    ),
  ],
};
