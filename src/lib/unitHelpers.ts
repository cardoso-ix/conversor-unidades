import type { AffineUnit, CustomUnit, LinearUnit } from './types';

export function linear(
  id: string,
  symbol: string,
  name: string,
  factor: number,
): LinearUnit {
  return { id, symbol, name, kind: 'linear', factor };
}

export function affine(
  id: string,
  symbol: string,
  name: string,
  factor: number,
  offset: number,
): AffineUnit {
  return { id, symbol, name, kind: 'affine', factor, offset };
}

export function custom(
  id: string,
  symbol: string,
  name: string,
  toBase: (value: number) => number,
  fromBase: (value: number) => number,
): CustomUnit {
  return { id, symbol, name, kind: 'custom', toBase, fromBase };
}
