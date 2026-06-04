import type { Unit } from './types';

export class ConversionError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ConversionError';
  }
}

function toBaseValue(value: number, unit: Unit): number {
  switch (unit.kind) {
    case 'linear':
      return value * unit.factor;
    case 'affine':
      return value * unit.factor + unit.offset;
    case 'custom':
      return unit.toBase(value);
  }
}

function fromBaseValue(base: number, unit: Unit): number {
  switch (unit.kind) {
    case 'linear':
      return base / unit.factor;
    case 'affine':
      return (base - unit.offset) / unit.factor;
    case 'custom':
      return unit.fromBase(base);
  }
}

export function convert(value: number, fromUnit: Unit, toUnit: Unit): number {
  if (!Number.isFinite(value)) {
    throw new ConversionError('Informe um valor numérico válido.');
  }

  const base = toBaseValue(value, fromUnit);
  const result = fromBaseValue(base, toUnit);

  if (!Number.isFinite(result)) {
    throw new ConversionError('Resultado fora do intervalo representável.');
  }

  return result;
}

export function getUnitById(units: Unit[], id: string): Unit | undefined {
  return units.find((u) => u.id === id);
}
