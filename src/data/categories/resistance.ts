import type { Category } from '../../lib/types';
import { linear } from '../../lib/unitHelpers';

export const resistance: Category = {
  id: 'resistance',
  name: 'Resistência elétrica',
  group: 'electricity',
  baseUnitId: 'Ohm',
  units: [
    linear('Ohm', 'Ω', 'Ohm', 1),
    linear('mOhm', 'mΩ', 'Miliohm', 0.001),
    linear('kOhm', 'kΩ', 'Quiloohm', 1000),
    linear('MOhm', 'MΩ', 'Megaohm', 1e6),
    linear('GOhm', 'GΩ', 'Gigaohm', 1e9),
  ],
};
