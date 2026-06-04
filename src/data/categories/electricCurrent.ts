import type { Category } from '../../lib/types';
import { linear } from '../../lib/unitHelpers';

export const electricCurrent: Category = {
  id: 'electricCurrent',
  name: 'Corrente elétrica',
  group: 'fundamental',
  baseUnitId: 'A',
  units: [
    linear('A', 'A', 'Ampere', 1),
    linear('mA', 'mA', 'Miliampere', 0.001),
    linear('uA', 'µA', 'Microampere', 1e-6),
    linear('nA', 'nA', 'Nanoampere', 1e-9),
    linear('kA', 'kA', 'Quiloampere', 1000),
    linear('MA', 'MA', 'Megaampere', 1e6),
  ],
};
