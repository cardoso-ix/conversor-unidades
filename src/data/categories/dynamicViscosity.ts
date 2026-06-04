import type { Category } from '../../lib/types';
import { linear } from '../../lib/unitHelpers';

export const dynamicViscosity: Category = {
  id: 'dynamicViscosity',
  name: 'Viscosidade dinâmica',
  group: 'mechanics',
  baseUnitId: 'Pa_s',
  units: [
    linear('Pa_s', 'Pa·s', 'Pascal-segundo', 1),
    linear('P', 'P', 'Poise', 0.1),
    linear('cP', 'cP', 'Centipoise', 0.001),
    linear('mPa_s', 'mPa·s', 'Milpascal-segundo', 0.001),
    linear('lb_ft_s', 'lb/(ft·s)', 'Libra por pé-segundo', 1.4881639),
    linear('reyn', 'reyn', 'Reyn', 6890),
  ],
};
