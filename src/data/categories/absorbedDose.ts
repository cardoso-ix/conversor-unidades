import type { Category } from '../../lib/types';
import { linear } from '../../lib/unitHelpers';

export const absorbedDose: Category = {
  id: 'absorbedDose',
  name: 'Dose absorvida',
  group: 'radiation',
  baseUnitId: 'Gy',
  units: [
    linear('Gy', 'Gy', 'Gray', 1),
    linear('mGy', 'mGy', 'Miligray', 0.001),
    linear('uGy', 'µGy', 'Microgray', 1e-6),
    linear('kGy', 'kGy', 'Quilogram', 1000),
    linear('rad', 'rad', 'Rad', 0.01),
    linear('mrad', 'mrad', 'Milirad', 1e-5),
  ],
};
