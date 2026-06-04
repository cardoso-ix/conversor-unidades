import type { Category } from '../../lib/types';
import { linear } from '../../lib/unitHelpers';

export const voltage: Category = {
  id: 'voltage',
  name: 'Tensão elétrica',
  group: 'electricity',
  baseUnitId: 'V',
  units: [
    linear('V', 'V', 'Volt', 1),
    linear('mV', 'mV', 'Milivolt', 0.001),
    linear('uV', 'µV', 'Microvolt', 1e-6),
    linear('kV', 'kV', 'Quilovolt', 1000),
    linear('MV', 'MV', 'Megavolt', 1e6),
    linear('statV', 'statV', 'Statvolt', 299.792458),
  ],
};
