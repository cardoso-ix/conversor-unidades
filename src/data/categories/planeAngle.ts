import type { Category } from '../../lib/types';
import { linear } from '../../lib/unitHelpers';

const PI = Math.PI;

export const planeAngle: Category = {
  id: 'planeAngle',
  name: 'Ângulo plano',
  group: 'fundamental',
  baseUnitId: 'rad',
  units: [
    linear('rad', 'rad', 'Radiano', 1),
    linear('deg', '°', 'Grau', PI / 180),
    linear('arcmin', "'", 'Minuto de arco', PI / 10800),
    linear('arcsec', '"', 'Segundo de arco', PI / 648000),
    linear('grad', 'grad', 'Gradian', PI / 200),
    linear('rev', 'rev', 'Volta completa', 2 * PI),
    linear('mil', 'mil', 'Mil angular', PI / 3200),
  ],
};
