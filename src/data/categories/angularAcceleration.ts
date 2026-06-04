import type { Category } from '../../lib/types';
import { linear } from '../../lib/unitHelpers';

const PI = Math.PI;

export const angularAcceleration: Category = {
  id: 'angularAcceleration',
  name: 'Aceleração angular',
  group: 'mechanics',
  baseUnitId: 'rad_s2',
  units: [
    linear('rad_s2', 'rad/s²', 'Radiano por segundo ao quadrado', 1),
    linear('deg_s2', '°/s²', 'Grau por segundo ao quadrado', PI / 180),
    linear('rev_s2', 'rev/s²', 'Volta por segundo ao quadrado', 2 * PI),
    linear('rpm_s', 'rpm/s', 'RPM por segundo', PI / 30),
  ],
};
