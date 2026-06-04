import type { Category } from '../../lib/types';
import { linear } from '../../lib/unitHelpers';

export const amountOfSubstance: Category = {
  id: 'amountOfSubstance',
  name: 'Quantidade de substância',
  group: 'fundamental',
  baseUnitId: 'mol',
  units: [
    linear('mol', 'mol', 'Mol', 1),
    linear('mmol', 'mmol', 'Milimol', 0.001),
    linear('umol', 'µmol', 'Micromol', 1e-6),
    linear('nmol', 'nmol', 'Nanomol', 1e-9),
    linear('kmol', 'kmol', 'Quilomol', 1000),
  ],
};
