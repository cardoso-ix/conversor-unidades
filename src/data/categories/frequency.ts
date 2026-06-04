import type { Category } from '../../lib/types';
import { linear } from '../../lib/unitHelpers';

export const frequency: Category = {
  id: 'frequency',
  name: 'Frequência',
  group: 'mechanics',
  baseUnitId: 'Hz',
  units: [
    linear('Hz', 'Hz', 'Hertz', 1),
    linear('kHz', 'kHz', 'Quilohertz', 1000),
    linear('MHz', 'MHz', 'Megahertz', 1e6),
    linear('GHz', 'GHz', 'Gigahertz', 1e9),
    linear('THz', 'THz', 'Terahertz', 1e12),
    linear('mHz', 'mHz', 'Milhertz', 0.001),
    linear('rpm', 'rpm', 'Rotações por minuto', 1 / 60),
    linear('rps', 'rps', 'Rotações por segundo', 1),
    linear('bpm', 'bpm', 'Batimentos por minuto', 1 / 60),
  ],
};
