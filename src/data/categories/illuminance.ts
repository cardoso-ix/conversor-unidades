import type { Category } from '../../lib/types';
import { linear } from '../../lib/unitHelpers';

export const illuminance: Category = {
  id: 'illuminance',
  name: 'Iluminância',
  group: 'electricity',
  baseUnitId: 'lx',
  units: [
    linear('lx', 'lx', 'Lux', 1),
    linear('mlx', 'mlx', 'Mililux', 0.001),
    linear('klx', 'klx', 'Quilolux', 1000),
    linear('fc', 'fc', 'Foot-candle', 10.763910416709722),
    linear('ph', 'ph', 'Phot', 10000),
  ],
};
