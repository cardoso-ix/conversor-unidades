import type { Category } from '../../lib/types';
import { affine } from '../../lib/unitHelpers';

const F_OFFSET = 273.15 - (32 * 5) / 9;

export const temperature: Category = {
  id: 'temperature',
  name: 'Temperatura',
  group: 'fundamental',
  baseUnitId: 'K',
  units: [
    affine('K', 'K', 'Kelvin', 1, 0),
    affine('C', '°C', 'Grau Celsius', 1, 273.15),
    affine('F', '°F', 'Grau Fahrenheit', 5 / 9, F_OFFSET),
    affine('R', '°R', 'Grau Rankine', 5 / 9, 0),
    affine('Re', '°Ré', 'Grau Réaumur', 1.25, 273.15),
  ],
};
