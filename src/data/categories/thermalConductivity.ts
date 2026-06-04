import type { Category } from '../../lib/types';
import { linear } from '../../lib/unitHelpers';

export const thermalConductivity: Category = {
  id: 'thermalConductivity',
  name: 'Condutividade térmica',
  group: 'thermodynamics',
  baseUnitId: 'W_mK',
  units: [
    linear('W_mK', 'W/(m·K)', 'Watt por metro-kelvin', 1),
    linear('kW_mK', 'kW/(m·K)', 'Quilowatt por metro-kelvin', 1000),
    linear('cal_s_cmC', 'cal/(s·cm·°C)', 'Caloria por segundo-centímetro-grau Celsius', 418.4),
    linear('BTU_h_ftF', 'BTU/(h·ft·°F)', 'BTU por hora-pé-grau Fahrenheit', 1.730735),
  ],
};
