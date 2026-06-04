import type { Category } from '../../lib/types';
import { linear } from '../../lib/unitHelpers';

export const area: Category = {
  id: 'area',
  name: 'Área',
  group: 'mechanics',
  baseUnitId: 'm2',
  units: [
    linear('m2', 'm²', 'Metro quadrado', 1),
    linear('km2', 'km²', 'Quilômetro quadrado', 1e6),
    linear('cm2', 'cm²', 'Centímetro quadrado', 1e-4),
    linear('mm2', 'mm²', 'Milímetro quadrado', 1e-6),
    linear('ha', 'ha', 'Hectare', 10000),
    linear('acre', 'acre', 'Acre', 4046.8564224),
    linear('in2', 'pol²', 'Polegada quadrada', 0.00064516),
    linear('ft2', 'pé²', 'Pé quadrado', 0.09290304),
    linear('yd2', 'yd²', 'Jarda quadrada', 0.83612736),
    linear('mi2', 'mi²', 'Milha quadrada', 2589988.110336),
    linear('barn', 'barn', 'Barn', 1e-28),
  ],
};
