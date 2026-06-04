import type { Category } from '../../lib/types';
import { linear } from '../../lib/unitHelpers';

const PI = Math.PI;

export const angularVelocity: Category = {
  id: 'angularVelocity',
  name: 'Velocidade angular',
  group: 'mechanics',
  baseUnitId: 'rad_s',
  units: [
    linear('rad_s', 'rad/s', 'Radiano por segundo', 1),
    linear('deg_s', '°/s', 'Grau por segundo', PI / 180),
    linear('rpm', 'rpm', 'Rotações por minuto', PI / 30),
    linear('rps', 'rps', 'Rotações por segundo', 2 * PI),
    linear('rev_min', 'rev/min', 'Volta por minuto', PI / 30),
    linear('rev_s', 'rev/s', 'Volta por segundo', 2 * PI),
  ],
};
