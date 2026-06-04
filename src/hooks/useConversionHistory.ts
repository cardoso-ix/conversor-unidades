import { useCallback, useEffect, useState } from 'react';

const STORAGE_KEY = 'unit-converter-history';
const MAX_ENTRIES = 25;
const DEBOUNCE_MS = 900;

export interface HistoryEntry {
  id: string;
  categoryId: string;
  categoryName: string;
  categoryEmoji: string;
  inputValue: string;
  outputValue: string;
  fromSymbol: string;
  toSymbol: string;
  fromUnitId: string;
  toUnitId: string;
  timestamp: number;
}

interface AddEntryParams {
  categoryId: string;
  categoryName: string;
  categoryEmoji: string;
  inputValue: string;
  outputValue: string;
  fromSymbol: string;
  toSymbol: string;
  fromUnitId: string;
  toUnitId: string;
}

function loadHistory(): HistoryEntry[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw) as HistoryEntry[];
  } catch {
    /* ignore */
  }
  return [];
}

function saveHistory(entries: HistoryEntry[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
}

function isDuplicate(a: HistoryEntry, b: AddEntryParams): boolean {
  return (
    a.categoryId === b.categoryId &&
    a.fromUnitId === b.fromUnitId &&
    a.toUnitId === b.toUnitId &&
    a.inputValue === b.inputValue &&
    a.outputValue === b.outputValue
  );
}

export function useConversionHistory() {
  const [history, setHistory] = useState<HistoryEntry[]>(() => loadHistory());

  const addEntry = useCallback((params: AddEntryParams) => {
    setHistory((prev) => {
      if (prev.length > 0 && isDuplicate(prev[0], params)) return prev;

      const entry: HistoryEntry = {
        id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
        ...params,
        timestamp: Date.now(),
      };

      const next = [entry, ...prev].slice(0, MAX_ENTRIES);
      saveHistory(next);
      return next;
    });
  }, []);

  const clearHistory = useCallback(() => {
    setHistory([]);
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  const removeEntry = useCallback((id: string) => {
    setHistory((prev) => {
      const next = prev.filter((e) => e.id !== id);
      saveHistory(next);
      return next;
    });
  }, []);

  return { history, addEntry, clearHistory, removeEntry };
}

interface TrackHistoryParams {
  categoryId: string;
  categoryName: string;
  categoryEmoji: string;
  inputValue: string;
  outputValue: string;
  fromSymbol: string;
  toSymbol: string;
  fromUnitId: string;
  toUnitId: string;
  error: string | null;
  addEntry: (params: AddEntryParams) => void;
}

export function useTrackConversion({
  categoryId,
  categoryName,
  categoryEmoji,
  inputValue,
  outputValue,
  fromSymbol,
  toSymbol,
  fromUnitId,
  toUnitId,
  error,
  addEntry,
}: TrackHistoryParams) {
  useEffect(() => {
    if (error || !outputValue || outputValue === '—' || !inputValue.trim()) return;

    const timer = window.setTimeout(() => {
      addEntry({
        categoryId,
        categoryName,
        categoryEmoji,
        inputValue,
        outputValue,
        fromSymbol,
        toSymbol,
        fromUnitId,
        toUnitId,
      });
    }, DEBOUNCE_MS);

    return () => window.clearTimeout(timer);
  }, [
    categoryId,
    categoryName,
    categoryEmoji,
    inputValue,
    outputValue,
    fromSymbol,
    toSymbol,
    fromUnitId,
    toUnitId,
    error,
    addEntry,
  ]);
}
