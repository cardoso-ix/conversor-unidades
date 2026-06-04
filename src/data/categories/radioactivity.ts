import type { Category } from '../../lib/types';
import { linear } from '../../lib/unitHelpers';

export const radioactivity: Category = {
  id: 'radioactivity',
  name: 'Atividade radioativa',
  group: 'radiation',
  baseUnitId: 'Bq',
  units: [
    linear('Bq', 'Bq', 'Becquerel', 1),
    linear('kBq', 'kBq', 'Quilobecquerel', 1000),
    linear('MBq', 'MBq', 'Megabecquerel', 1e6),
    linear('GBq', 'GBq', 'Gigabecquerel', 1e9),
    linear('Ci', 'Ci', 'Curie', 3.7e10),
    linear('mCi', 'mCi', 'Milicurie', 3.7e7),
    linear('uCi', 'µCi', 'Microcurie', 3.7e4),
    linear('Rd', 'Rd', 'Rutherford', 1e6),
  ],
};
