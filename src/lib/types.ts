export type CategoryGroup =
  | 'fundamental'
  | 'mechanics'
  | 'electricity'
  | 'thermodynamics'
  | 'radiation'
  | 'everyday';

export const GROUP_LABELS: Record<CategoryGroup, string> = {
  fundamental: 'Grandezas Fundamentais',
  mechanics: 'Mecânica e Fluidos',
  electricity: 'Eletricidade, Magnetismo e Óptica',
  thermodynamics: 'Termodinâmica',
  radiation: 'Radiação',
  everyday: 'Informática e Uso Cotidiano',
};

export type ConversionKind = 'linear' | 'affine' | 'custom';

export interface LinearUnit {
  id: string;
  symbol: string;
  name: string;
  kind: 'linear';
  factor: number;
}

export interface AffineUnit {
  id: string;
  symbol: string;
  name: string;
  kind: 'affine';
  factor: number;
  offset: number;
}

export interface CustomUnit {
  id: string;
  symbol: string;
  name: string;
  kind: 'custom';
  toBase: (value: number) => number;
  fromBase: (value: number) => number;
}

export type Unit = LinearUnit | AffineUnit | CustomUnit;

export interface Category {
  id: string;
  name: string;
  group: CategoryGroup;
  baseUnitId: string;
  units: Unit[];
}

export interface SearchResult {
  categoryId: string;
  categoryName: string;
  unitId?: string;
  unitName?: string;
  unitSymbol?: string;
  matchType: 'category' | 'unit';
}
