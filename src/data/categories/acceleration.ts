import type { Category } from '../../lib/types';
import { linear } from '../../lib/unitHelpers';

export const acceleration: Category = {
  id: 'acceleration',
  name: 'Aceleração',
  group: 'mechanics',
  baseUnitId: 'm_s2',
  units: [
    linear('m_s2', 'm/s²', 'Metro por segundo ao quadrado', 1),
    linear('g', 'g', 'Gravidade padrão', 9.80665),
    linear('ft_s2', 'ft/s²', 'Pé por segundo ao quadrado', 0.3048),
    linear('gal', 'Gal', 'Gal', 0.01),
    linear('km_h2', 'km/h²', 'Quilômetro por hora ao quadrado', 1000 / 12960000),
  ],
};
