import { useEffect, useRef, useState } from 'react';
import type { Category, Unit } from '../lib/types';
import { AdaptiveResultField } from './AdaptiveResultField';
import { UnitSelect } from './UnitSelect';

interface ConverterPanelProps {
  category: Category;
  inputValue: string;
  outputValue: string;
  fromUnitId: string;
  toUnitId: string;
  fromUnit?: Unit;
  toUnit?: Unit;
  error: string | null;
  onInputChange: (value: string) => void;
  onFromUnitChange: (unitId: string) => void;
  onToUnitChange: (unitId: string) => void;
  onSwap: () => void;
}

export function ConverterPanel({
  category,
  inputValue,
  outputValue,
  fromUnitId,
  toUnitId,
  fromUnit,
  toUnit,
  error,
  onInputChange,
  onFromUnitChange,
  onToUnitChange,
  onSwap,
}: ConverterPanelProps) {
  const [resultAnimating, setResultAnimating] = useState(false);
  const [swapAnimating, setSwapAnimating] = useState(false);
  const prevOutput = useRef(outputValue);

  useEffect(() => {
    if (prevOutput.current !== outputValue && outputValue && outputValue !== '—') {
      setResultAnimating(true);
      const timer = window.setTimeout(() => setResultAnimating(false), 450);
      prevOutput.current = outputValue;
      return () => window.clearTimeout(timer);
    }
    prevOutput.current = outputValue;
  }, [outputValue]);

  const handleSwap = () => {
    setSwapAnimating(true);
    window.setTimeout(() => setSwapAnimating(false), 500);
    onSwap();
  };

  const summary =
    fromUnit && toUnit && outputValue && outputValue !== '—'
      ? `${inputValue || '0'} ${fromUnit.symbol} = ${outputValue} ${toUnit.symbol}`
      : null;

  return (
    <section className="converter-panel" aria-label={`Conversor de ${category.name}`}>
      <div className="converter-panel__glass">
        <header className="converter-panel__header">
          <h1 className="converter-panel__title">{category.name}</h1>
          <p className="converter-panel__subtitle">
            {category.units.length} unidades disponíveis
          </p>
        </header>

        <div className="converter-panel__grid">
          <div className="converter-field">
            <label className="converter-field__label" htmlFor="from-value">
              De
            </label>
            <input
              id="from-value"
              type="text"
              inputMode="decimal"
              className="converter-field__input"
              value={inputValue}
              onChange={(e) => onInputChange(e.target.value)}
              placeholder="0"
              autoComplete="off"
            />
            <UnitSelect
              units={category.units}
              value={fromUnitId}
              onChange={onFromUnitChange}
              label="Unidade de origem"
            />
          </div>

          <button
            type="button"
            className={`converter-panel__swap${swapAnimating ? ' converter-panel__swap--active' : ''}`}
            onClick={handleSwap}
            aria-label="Inverter unidades"
            title="Inverter"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M7 16V4M7 4L3 8M7 4l4 4" />
              <path d="M17 8v12M17 20l4-4M17 20l-4-4" />
            </svg>
          </button>

          <div className="converter-field">
            <label className="converter-field__label" htmlFor="to-value">
              Para
            </label>
            <AdaptiveResultField
              id="to-value"
              value={outputValue}
              animating={resultAnimating}
            />
            <UnitSelect
              units={category.units}
              value={toUnitId}
              onChange={onToUnitChange}
              label="Unidade de destino"
            />
          </div>
        </div>

        {summary && !error && (
          <p
            className={`converter-panel__summary${resultAnimating ? ' converter-panel__summary--pulse' : ''}`}
            aria-live="polite"
          >
            {summary}
          </p>
        )}

        {error && (
          <p className="converter-panel__error" role="alert">
            {error}
          </p>
        )}
      </div>
    </section>
  );
}
