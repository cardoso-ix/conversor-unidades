import type { Category } from '../../lib/types';
import { linear } from '../../lib/unitHelpers';

export const linearMomentum: Category = {
  id: 'linearMomentum',
  name: 'Momento linear',
  group: 'mechanics',
  baseUnitId: 'kg_m_s',
  units: [
    linear('kg_m_s', 'kg·m/s', 'Quilograma-metro por segundo', 1),
    linear('N_s', 'N·s', 'Newton-segundo', 1),
    linear('lbfs', 'lbf·s', 'Libra-força-segundo', 4.4482216152605),
    linear('slug_ft_s', 'slug·ft/s', 'Slug-pé por segundo', 4.4482216152605),
  ],
};
