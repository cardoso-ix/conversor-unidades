import type { Category } from '../../lib/types';
import { linear } from '../../lib/unitHelpers';

export const mass: Category = {
  id: 'mass',
  name: 'Massa',
  group: 'fundamental',
  baseUnitId: 'kg',
  units: [
    linear('kg', 'kg', 'Quilograma', 1),
    linear('g', 'g', 'Grama', 0.001),
    linear('mg', 'mg', 'Miligrama', 1e-6),
    linear('ug', 'µg', 'Micrograma', 1e-9),
    linear('t', 't', 'Tonelada métrica', 1000),
    linear('ton_us', 'ton US', 'Tonelada curta (EUA)', 907.18474),
    linear('ton_uk', 'ton UK', 'Tonelada longa (UK)', 1016.0469088),
    linear('lb', 'lb', 'Libra avoirdupois', 0.45359237),
    linear('oz', 'oz', 'Onça avoirdupois', 0.028349523125),
    linear('stone', 'st', 'Stone', 6.35029318),
    linear('grain', 'gr', 'Grão', 6.479891e-5),
    linear('dram', 'dr', 'Dracma', 0.0017718451953125),
    linear('arroba', '@', 'Arroba', 15),
    linear('libra_pt', 'lb pt', 'Libra portuguesa', 0.459),
    linear('quintal', 'qq', 'Quintal métrico', 100),
    linear('carat', 'ct', 'Quilate', 0.0002),
    linear('slug', 'slug', 'Slug', 14.593903),
  ],
};
