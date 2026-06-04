import type { Category } from '../../lib/types';
import { linear } from '../../lib/unitHelpers';

export const speed: Category = {
  id: 'speed',
  name: 'Velocidade',
  group: 'mechanics',
  baseUnitId: 'm_s',
  units: [
    linear('m_s', 'm/s', 'Metro por segundo', 1),
    linear('km_h', 'km/h', 'Quilômetro por hora', 1000 / 3600),
    linear('mph', 'mph', 'Milha por hora', 1609.344 / 3600),
    linear('knot', 'nó', 'Nó', 1852 / 3600),
    linear('ft_s', 'ft/s', 'Pé por segundo', 0.3048),
    linear('in_s', 'pol/s', 'Polegada por segundo', 0.0254),
    linear('mach', 'Mach', 'Mach (20°C)', 343),
    linear('c', 'c', 'Velocidade da luz', 299792458),
  ],
};
