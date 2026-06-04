import type { Category } from '../../lib/types';
import { linear } from '../../lib/unitHelpers';

export const luminousFlux: Category = {
  id: 'luminousFlux',
  name: 'Fluxo luminoso',
  group: 'electricity',
  baseUnitId: 'lm',
  units: [
    linear('lm', 'lm', 'Lumen', 1),
    linear('mlm', 'mlm', 'Mililumen', 0.001),
    linear('klm', 'klm', 'Quilolumen', 1000),
  ],
};
