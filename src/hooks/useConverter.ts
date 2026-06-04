import { useCallback, useEffect, useMemo, useState } from 'react';
import { getCategoryById } from '../data';
import { convert, getUnitById, ConversionError } from '../lib/convert';
import { formatNumber, formatNumberForDisplay, parseInput } from '../lib/format';

const STORAGE_KEY = 'unit-converter-state';

interface StoredState {
  categoryId: string;
  fromUnitId: string;
  toUnitId: string;
  inputValue: string;
}

function loadState(): Partial<StoredState> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw) as Partial<StoredState>;
  } catch {
    /* ignore */
  }
  return {};
}

function saveState(state: StoredState) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function defaultUnits(categoryId: string) {
  const cat = getCategoryById(categoryId);
  if (!cat || cat.units.length === 0) return { from: '', to: '' };
  return {
    from: cat.units[0].id,
    to: cat.units[1]?.id ?? cat.units[0].id,
  };
}

export function useConverter(initialCategoryId = 'length') {
  const stored = useMemo(() => loadState(), []);

  const initialCategory = stored.categoryId ?? initialCategoryId;
  const defaults = defaultUnits(initialCategory);

  const [categoryId, setCategoryId] = useState(initialCategory);
  const [fromUnitId, setFromUnitId] = useState(
    stored.categoryId === initialCategory && stored.fromUnitId
      ? stored.fromUnitId
      : defaults.from,
  );
  const [toUnitId, setToUnitId] = useState(
    stored.categoryId === initialCategory && stored.toUnitId
      ? stored.toUnitId
      : defaults.to,
  );
  const [inputValue, setInputValue] = useState(stored.inputValue ?? '1');

  const category = useMemo(() => getCategoryById(categoryId), [categoryId]);

  useEffect(() => {
    if (fromUnitId && toUnitId) {
      saveState({ categoryId, fromUnitId, toUnitId, inputValue });
    }
  }, [categoryId, fromUnitId, toUnitId, inputValue]);

  const selectCategory = useCallback((id: string) => {
    const cat = getCategoryById(id);
    if (!cat) return;

    setCategoryId(id);
    setFromUnitId(cat.units[0]?.id ?? '');
    setToUnitId(cat.units[1]?.id ?? cat.units[0]?.id ?? '');
  }, []);

  const selectCategoryWithUnit = useCallback((id: string, unitId?: string) => {
    const cat = getCategoryById(id);
    if (!cat) return;

    setCategoryId(id);
    if (unitId && cat.units.some((u) => u.id === unitId)) {
      setFromUnitId(unitId);
      setToUnitId(cat.units.find((u) => u.id !== unitId)?.id ?? cat.units[0].id);
    } else {
      setFromUnitId(cat.units[0]?.id ?? '');
      setToUnitId(cat.units[1]?.id ?? cat.units[0]?.id ?? '');
    }
  }, []);

  const swapUnits = useCallback(() => {
    if (!category || !fromUnitId || !toUnitId) return;

    const parsed = parseInput(inputValue);
    if (parsed !== null) {
      const fromUnit = getUnitById(category.units, fromUnitId);
      const toUnit = getUnitById(category.units, toUnitId);
      if (fromUnit && toUnit) {
        try {
          setInputValue(formatNumber(convert(parsed, fromUnit, toUnit)));
        } catch {
          /* keep current input */
        }
      }
    }

    setFromUnitId(toUnitId);
    setToUnitId(fromUnitId);
  }, [category, fromUnitId, toUnitId, inputValue]);

  const applyConversion = useCallback(
    (params: {
      categoryId: string;
      fromUnitId: string;
      toUnitId: string;
      inputValue: string;
    }) => {
      const cat = getCategoryById(params.categoryId);
      if (!cat) return;

      setCategoryId(params.categoryId);
      setFromUnitId(params.fromUnitId);
      setToUnitId(params.toUnitId);
      setInputValue(params.inputValue);
    },
    [],
  );

  const { outputValue, error } = useMemo(() => {
    if (!category || !fromUnitId || !toUnitId) {
      return { outputValue: '', error: null };
    }

    const parsed = parseInput(inputValue);
    if (parsed === null) {
      return { outputValue: '', error: null };
    }

    const fromUnit = getUnitById(category.units, fromUnitId);
    const toUnit = getUnitById(category.units, toUnitId);
    if (!fromUnit || !toUnit) {
      return { outputValue: '', error: 'Unidade não encontrada.' };
    }

    try {
      const result = convert(parsed, fromUnit, toUnit);
      return { outputValue: formatNumberForDisplay(result).text, error: null };
    } catch (e) {
      const message = e instanceof ConversionError ? e.message : 'Erro na conversão.';
      return { outputValue: '—', error: message };
    }
  }, [category, fromUnitId, toUnitId, inputValue]);

  const fromUnit = category && fromUnitId
    ? getUnitById(category.units, fromUnitId)
    : undefined;
  const toUnit = category && toUnitId
    ? getUnitById(category.units, toUnitId)
    : undefined;

  return {
    category,
    categoryId,
    fromUnitId,
    toUnitId,
    inputValue,
    outputValue,
    error,
    fromUnit,
    toUnit,
    setInputValue,
    setFromUnitId,
    setToUnitId,
    selectCategory,
    selectCategoryWithUnit,
    applyConversion,
    swapUnits,
  };
}
