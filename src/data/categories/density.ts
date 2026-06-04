import type { Category } from '../../lib/types';
import { linear } from '../../lib/unitHelpers';

export const density: Category = {
  id: 'density',
  name: 'Densidade',
  group: 'mechanics',
  baseUnitId: 'kg_m3',
  units: [
    linear('kg_m3', 'kg/m³', 'Quilograma por metro cúbico', 1),
    linear('g_cm3', 'g/cm³', 'Grama por centímetro cúbico', 1000),
    linear('g_L', 'g/L', 'Grama por litro', 1),
    linear('g_mL', 'g/mL', 'Grama por mililitro', 1000),
    linear('lb_ft3', 'lb/ft³', 'Libra por pé cúbico', 16.0184633739601),
    linear('lb_in3', 'lb/pol³', 'Libra por polegada cúbica', 27679.9047102034),
    linear('oz_in3', 'oz/pol³', 'Onça por polegada cúbica', 1729.994044),
    linear('slug_ft3', 'slug/ft³', 'Slug por pé cúbico', 515.378818),
  ],
};
