import type { Category } from '../../lib/types';
import { linear } from '../../lib/unitHelpers';

export const digitalStorage: Category = {
  id: 'digitalStorage',
  name: 'Armazenamento digital',
  group: 'everyday',
  baseUnitId: 'B',
  units: [
    linear('bit', 'bit', 'Bit', 0.125),
    linear('B', 'B', 'Byte', 1),
    linear('KB', 'KB', 'Kilobyte (decimal)', 1000),
    linear('MB', 'MB', 'Megabyte (decimal)', 1e6),
    linear('GB', 'GB', 'Gigabyte (decimal)', 1e9),
    linear('TB', 'TB', 'Terabyte (decimal)', 1e12),
    linear('PB', 'PB', 'Petabyte (decimal)', 1e15),
    linear('KiB', 'KiB', 'Kibibyte (binário)', 1024),
    linear('MiB', 'MiB', 'Mebibyte (binário)', 1048576),
    linear('GiB', 'GiB', 'Gibibyte (binário)', 1073741824),
    linear('TiB', 'TiB', 'Tebibyte (binário)', 1099511627776),
    linear('PiB', 'PiB', 'Pebibyte (binário)', 1125899906842624),
    linear('Kb', 'Kb', 'Kilobit', 125),
    linear('Mb', 'Mb', 'Megabit', 125000),
    linear('Gb', 'Gb', 'Gigabit', 125000000),
  ],
};
