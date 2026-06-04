import type { Category } from '../../lib/types';
import { linear } from '../../lib/unitHelpers';

export const massFlow: Category = {
  id: 'massFlow',
  name: 'Vazão mássica',
  group: 'mechanics',
  baseUnitId: 'kg_s',
  units: [
    linear('kg_s', 'kg/s', 'Quilograma por segundo', 1),
    linear('g_s', 'g/s', 'Grama por segundo', 0.001),
    linear('g_min', 'g/min', 'Grama por minuto', 0.001 / 60),
    linear('kg_h', 'kg/h', 'Quilograma por hora', 1 / 3600),
    linear('kg_min', 'kg/min', 'Quilograma por minuto', 1 / 60),
    linear('lb_s', 'lb/s', 'Libra por segundo', 0.45359237),
    linear('lb_min', 'lb/min', 'Libra por minuto', 0.45359237 / 60),
    linear('lb_h', 'lb/h', 'Libra por hora', 0.45359237 / 3600),
    linear('ton_h', 't/h', 'Tonelada por hora', 1000 / 3600),
  ],
};
