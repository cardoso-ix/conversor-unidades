import type { Category } from '../../lib/types';
import { linear } from '../../lib/unitHelpers';

export const solidAngle: Category = {
  id: 'solidAngle',
  name: 'Ângulo sólido',
  group: 'fundamental',
  baseUnitId: 'sr',
  units: [
    linear('sr', 'sr', 'Esterradiano', 1),
    linear('deg2', 'deg²', 'Grau quadrado', Math.PI * Math.PI / (180 * 180)),
  ],
};
