import type { Category } from '../../lib/types';
import { linear } from '../../lib/unitHelpers';

export const time: Category = {
  id: 'time',
  name: 'Tempo',
  group: 'fundamental',
  baseUnitId: 's',
  units: [
    linear('s', 's', 'Segundo', 1),
    linear('ms', 'ms', 'Milissegundo', 0.001),
    linear('us', 'µs', 'Microssegundo', 1e-6),
    linear('ns', 'ns', 'Nanossegundo', 1e-9),
    linear('ps', 'ps', 'Picossegundo', 1e-12),
    linear('min', 'min', 'Minuto', 60),
    linear('h', 'h', 'Hora', 3600),
    linear('d', 'dia', 'Dia', 86400),
    linear('week', 'sem', 'Semana', 604800),
    linear('month', 'mês', 'Mês (30 dias)', 2592000),
    linear('year', 'ano', 'Ano juliano', 31557600),
    linear('decade', 'déc', 'Década', 315576000),
    linear('century', 'séc', 'Século', 3155760000),
    linear('fortnight', 'qna', 'Quinzena', 1209600),
  ],
};
