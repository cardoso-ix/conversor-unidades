import type { Category } from '../../lib/types';
import { linear } from '../../lib/unitHelpers';

export const force: Category = {
  id: 'force',
  name: 'Força',
  group: 'mechanics',
  baseUnitId: 'N',
  units: [
    linear('N', 'N', 'Newton', 1),
    linear('kN', 'kN', 'Quilonewton', 1000),
    linear('MN', 'MN', 'Meganewton', 1e6),
    linear('dyn', 'dyn', 'Dina', 1e-5),
    linear('lbf', 'lbf', 'Libra-força', 4.4482216152605),
    linear('kgf', 'kgf', 'Quilograma-força', 9.80665),
    linear('gf', 'gf', 'Grama-força', 0.00980665),
    linear('pdl', 'pdl', 'Poundal', 0.138254954376),
    linear('kip', 'kip', 'Kip', 4448.2216152605),
    linear('tonf', 'tonf', 'Tonelada-força', 9806.65),
  ],
};
