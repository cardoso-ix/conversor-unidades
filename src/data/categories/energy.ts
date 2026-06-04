import type { Category } from '../../lib/types';
import { linear } from '../../lib/unitHelpers';

export const energy: Category = {
  id: 'energy',
  name: 'Energia',
  group: 'mechanics',
  baseUnitId: 'J',
  units: [
    linear('J', 'J', 'Joule', 1),
    linear('kJ', 'kJ', 'Quilojoule', 1000),
    linear('MJ', 'MJ', 'Megajoule', 1e6),
    linear('GJ', 'GJ', 'Gigajoule', 1e9),
    linear('Wh', 'Wh', 'Watt-hora', 3600),
    linear('kWh', 'kWh', 'Quilowatt-hora', 3.6e6),
    linear('MWh', 'MWh', 'Megawatt-hora', 3.6e9),
    linear('cal', 'cal', 'Caloria (termoquímica)', 4.184),
    linear('kcal', 'kcal', 'Quilocaloria', 4184),
    linear('BTU', 'BTU', 'British Thermal Unit', 1055.05585262),
    linear('eV', 'eV', 'Electronvolt', 1.602176634e-19),
    linear('keV', 'keV', 'Quiloeletronvolt', 1.602176634e-16),
    linear('MeV', 'MeV', 'Megaeletronvolt', 1.602176634e-13),
    linear('ftlbf', 'ft·lbf', 'Pé-libra-força', 1.3558179483314004),
    linear('erg', 'erg', 'Erg', 1e-7),
    linear('therm', 'thm', 'Therm (EUA)', 1.05505585262e8),
  ],
};
