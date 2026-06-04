import type { Category } from '../../lib/types';
import { linear } from '../../lib/unitHelpers';

export const power: Category = {
  id: 'power',
  name: 'Potência',
  group: 'mechanics',
  baseUnitId: 'W',
  units: [
    linear('W', 'W', 'Watt', 1),
    linear('kW', 'kW', 'Quilowatt', 1000),
    linear('MW', 'MW', 'Megawatt', 1e6),
    linear('GW', 'GW', 'Gigawatt', 1e9),
    linear('mW', 'mW', 'Miliwatt', 0.001),
    linear('hp_metric', 'cv', 'Cavalo-vapor métrico', 735.49875),
    linear('hp_mechanical', 'HP', 'Horsepower mecânico', 745.69987158227022),
    linear('hp_electric', 'HP el', 'Horsepower elétrico', 746),
    linear('BTU_h', 'BTU/h', 'BTU por hora', 0.29307107),
    linear('ftlbf_s', 'ft·lbf/s', 'Pé-libra-força por segundo', 1.3558179483314004),
    linear('cal_s', 'cal/s', 'Caloria por segundo', 4.184),
  ],
};
