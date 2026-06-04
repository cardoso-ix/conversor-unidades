const ptBR = new Intl.NumberFormat('pt-BR', {
  maximumFractionDigits: 10,
  minimumFractionDigits: 0,
});

export type DisplaySize = 'lg' | 'md' | 'sm' | 'xs';

function toScientificPtBR(value: number, digits = 4): string {
  return value.toExponential(digits).replace('.', ',');
}

export function formatNumber(value: number): string {
  if (!Number.isFinite(value)) return '—';

  const abs = Math.abs(value);

  if (abs !== 0 && (abs >= 1e12 || abs < 1e-6)) {
    return toScientificPtBR(value, 6);
  }

  if (abs >= 1000) {
    return ptBR.format(Math.round(value * 1000) / 1000);
  }

  if (abs >= 1) {
    const rounded = Math.round(value * 1e6) / 1e6;
    return ptBR.format(rounded);
  }

  const significant = Math.round(value * 1e10) / 1e10;
  return ptBR.format(significant);
}

/** Formata valor para exibição no campo de resultado, com tamanho sugerido. */
export function formatNumberForDisplay(value: number): { text: string; size: DisplaySize } {
  if (!Number.isFinite(value)) {
    return { text: '—', size: 'lg' };
  }

  let text = formatNumber(value);

  if (text.length > 14) {
    text = toScientificPtBR(value, 4);
  }

  const len = text.length;
  let size: DisplaySize = 'lg';
  if (len > 13) size = 'xs';
  else if (len > 10) size = 'sm';
  else if (len > 7) size = 'md';

  return { text, size };
}

/** Ajusta tamanho com base no texto já formatado (string do resultado). */
export function getDisplaySizeFromText(text: string): DisplaySize {
  if (!text || text === '—') return 'lg';
  const len = text.length;
  if (len > 13) return 'xs';
  if (len > 10) return 'sm';
  if (len > 7) return 'md';
  return 'lg';
}

export function parseInput(raw: string): number | null {
  const normalized = raw.trim().replace(/\s/g, '').replace(',', '.');
  if (normalized === '' || normalized === '-' || normalized === '.') return null;
  const value = Number(normalized);
  return Number.isFinite(value) ? value : null;
}
