import type { Category } from '../../lib/types';
import { linear } from '../../lib/unitHelpers';

export const length: Category = {
  id: 'length',
  name: 'Comprimento',
  group: 'fundamental',
  baseUnitId: 'm',
  units: [
    linear('m', 'm', 'Metro', 1),
    linear('km', 'km', 'Quilômetro', 1000),
    linear('dm', 'dm', 'Decímetro', 0.1),
    linear('cm', 'cm', 'Centímetro', 0.01),
    linear('mm', 'mm', 'Milímetro', 0.001),
    linear('um', 'µm', 'Micrômetro', 1e-6),
    linear('nm', 'nm', 'Nanômetro', 1e-9),
    linear('pm', 'pm', 'Picômetro', 1e-12),
    linear('angstrom', 'Å', 'Angström', 1e-10),
    linear('in', 'pol', 'Polegada', 0.0254),
    linear('ft', 'pé', 'Pé', 0.3048),
    linear('yd', 'yd', 'Jarda', 0.9144),
    linear('mi', 'mi', 'Milha', 1609.344),
    linear('nmi', 'nmi', 'Milha náutica', 1852),
    linear('fathom', 'braça', 'Braça', 1.8288),
    linear('chain', 'cad', 'Cadeia', 20.1168),
    linear('furlong', 'furlong', 'Furlong', 201.168),
    linear('league', 'légua', 'Légua', 4828.032),
    linear('au', 'UA', 'Unidade astronômica', 1.495978707e11),
    linear('ly', 'al', 'Ano-luz', 9.4607304725808e15),
    linear('pc', 'pc', 'Parsec', 3.085677581491367e16),
  ],
};
