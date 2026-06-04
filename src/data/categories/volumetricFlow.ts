import type { Category } from '../../lib/types';
import { linear } from '../../lib/unitHelpers';

export const volumetricFlow: Category = {
  id: 'volumetricFlow',
  name: 'Vazão volumétrica',
  group: 'mechanics',
  baseUnitId: 'm3_s',
  units: [
    linear('m3_s', 'm³/s', 'Metro cúbico por segundo', 1),
    linear('L_s', 'L/s', 'Litro por segundo', 0.001),
    linear('L_min', 'L/min', 'Litro por minuto', 0.001 / 60),
    linear('L_h', 'L/h', 'Litro por hora', 0.001 / 3600),
    linear('m3_h', 'm³/h', 'Metro cúbico por hora', 1 / 3600),
    linear('gal_min_us', 'gal/min US', 'Galão americano por minuto', 0.003785411784 / 60),
    linear('gal_min_uk', 'gal/min UK', 'Galão imperial por minuto', 0.00454609 / 60),
    linear('ft3_min', 'ft³/min', 'Pé cúbico por minuto', 0.028316846592 / 60),
    linear('ft3_s', 'ft³/s', 'Pé cúbico por segundo', 0.028316846592),
    linear('cfm', 'CFM', 'Pé cúbico por minuto (CFM)', 0.028316846592 / 60),
  ],
};
