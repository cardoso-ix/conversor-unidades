import type { Category } from '../../lib/types';
import { linear } from '../../lib/unitHelpers';

export const luminance: Category = {
  id: 'luminance',
  name: 'Luminância',
  group: 'electricity',
  baseUnitId: 'cd_m2',
  units: [
    linear('cd_m2', 'cd/m²', 'Candela por metro quadrado', 1),
    linear('nit', 'nit', 'Nit', 1),
    linear('sb', 'sb', 'Stilb', 10000),
    linear('asb', 'asb', 'Apostilb', 1 / Math.PI),
    linear('ftL', 'ft-L', 'Foot-lambert', 3.42625909963539),
    linear('cd_ft2', 'cd/ft²', 'Candela por pé quadrado', 10.763910416709722),
  ],
};
