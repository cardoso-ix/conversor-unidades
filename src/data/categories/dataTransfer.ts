import type { Category } from '../../lib/types';
import { linear } from '../../lib/unitHelpers';

export const dataTransfer: Category = {
  id: 'dataTransfer',
  name: 'Taxa de transferência',
  group: 'everyday',
  baseUnitId: 'bps',
  units: [
    linear('bps', 'bit/s', 'Bit por segundo', 1),
    linear('Kbps', 'Kbit/s', 'Quilobit por segundo', 1000),
    linear('Mbps', 'Mbit/s', 'Megabit por segundo', 1e6),
    linear('Gbps', 'Gbit/s', 'Gigabit por segundo', 1e9),
    linear('Tbps', 'Tbit/s', 'Terabit por segundo', 1e12),
    linear('Bps', 'B/s', 'Byte por segundo', 8),
    linear('KBps', 'KB/s', 'Kilobyte por segundo', 8000),
    linear('MBps', 'MB/s', 'Megabyte por segundo', 8e6),
    linear('GBps', 'GB/s', 'Gigabyte por segundo', 8e9),
    linear('KiBps', 'KiB/s', 'Kibibyte por segundo', 8192),
    linear('MiBps', 'MiB/s', 'Mebibyte por segundo', 8388608),
  ],
};
