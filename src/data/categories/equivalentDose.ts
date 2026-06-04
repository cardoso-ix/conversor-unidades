import type { Category } from '../../lib/types';
import { linear } from '../../lib/unitHelpers';

export const equivalentDose: Category = {
  id: 'equivalentDose',
  name: 'Dose equivalente',
  group: 'radiation',
  baseUnitId: 'Sv',
  units: [
    linear('Sv', 'Sv', 'Sievert', 1),
    linear('mSv', 'mSv', 'Millisievert', 0.001),
    linear('uSv', 'µSv', 'Microsievert', 1e-6),
    linear('mrem', 'mrem', 'Milirem', 1e-5),
    linear('rem', 'rem', 'Rem', 0.01),
  ],
};
