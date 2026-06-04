import type { Category } from '../../lib/types';
import { linear } from '../../lib/unitHelpers';

export const torque: Category = {
  id: 'torque',
  name: 'Torque',
  group: 'mechanics',
  baseUnitId: 'Nm',
  units: [
    linear('Nm', 'N·m', 'Newton-metro', 1),
    linear('kNm', 'kN·m', 'Quilonewton-metro', 1000),
    linear('lbfft', 'lbf·ft', 'Libra-força-pé', 1.3558179483314004),
    linear('lbfin', 'lbf·pol', 'Libra-força-polegada', 0.112984829028458),
    linear('kgfm', 'kgf·m', 'Quilograma-força-metro', 9.80665),
    linear('kgfcm', 'kgf·cm', 'Quilograma-força-centímetro', 0.0980665),
    linear('dyncm', 'dyn·cm', 'Dina-centímetro', 1e-7),
    linear('ozfin', 'ozf·pol', 'Onça-força-polegada', 0.007061551833333),
  ],
};
