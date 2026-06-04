import type { Category } from '../../lib/types';
import { linear } from '../../lib/unitHelpers';

export const pressure: Category = {
  id: 'pressure',
  name: 'Pressão',
  group: 'mechanics',
  baseUnitId: 'Pa',
  units: [
    linear('Pa', 'Pa', 'Pascal', 1),
    linear('kPa', 'kPa', 'Quilopascal', 1000),
    linear('MPa', 'MPa', 'Megapascal', 1e6),
    linear('GPa', 'GPa', 'Gigapascal', 1e9),
    linear('bar', 'bar', 'Bar', 100000),
    linear('mbar', 'mbar', 'Milibar', 100),
    linear('atm', 'atm', 'Atmosfera padrão', 101325),
    linear('psi', 'psi', 'Libra por polegada quadrada', 6894.757293168),
    linear('ksi', 'ksi', 'Quilolibra por polegada quadrada', 6894757.293168),
    linear('mmHg', 'mmHg', 'Milímetro de mercúrio', 133.322387415),
    linear('inHg', 'inHg', 'Polegada de mercúrio', 3386.389),
    linear('Torr', 'Torr', 'Torr', 133.32236842105263),
    linear('inH2O', 'inH₂O', 'Polegada de água', 249.08891),
    linear('ftH2O', 'ftH₂O', 'Pé de água', 2989.06692),
  ],
};
