import { useEffect, useRef, useState } from 'react';
import { searchCategoriesAndUnits } from '../data';
import type { SearchResult } from '../lib/types';

interface SearchBarProps {
  onSelect: (categoryId: string, unitId?: string) => void;
}

export function SearchBar({ onSelect }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const [highlightIndex, setHighlightIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const results = query.trim() ? searchCategoriesAndUnits(query) : [];

  useEffect(() => {
    setHighlightIndex(0);
  }, [query]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (result: SearchResult) => {
    onSelect(result.categoryId, result.unitId);
    setQuery('');
    setOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!open || results.length === 0) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setHighlightIndex((i) => (i + 1) % results.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHighlightIndex((i) => (i - 1 + results.length) % results.length);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      handleSelect(results[highlightIndex]);
    } else if (e.key === 'Escape') {
      setOpen(false);
    }
  };

  return (
    <div className="search-bar" ref={containerRef}>
      <span className="search-bar__icon" aria-hidden="true">⌕</span>
      <input
        type="search"
        className="search-bar__input"
        placeholder="Buscar categoria ou unidade..."
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setOpen(true);
        }}
        onFocus={() => setOpen(true)}
        onKeyDown={handleKeyDown}
        aria-label="Buscar categoria ou unidade"
        aria-expanded={open && results.length > 0}
        aria-autocomplete="list"
      />

      {open && query.trim() && (
        <div className="search-bar__dropdown" role="listbox">
          {results.length === 0 ? (
            <div className="search-bar__empty">Nenhum resultado encontrado</div>
          ) : (
            results.map((result, index) => (
              <button
                key={`${result.categoryId}-${result.unitId ?? 'cat'}-${index}`}
                type="button"
                className={`search-bar__result${index === highlightIndex ? ' search-bar__result--highlighted' : ''}`}
                role="option"
                aria-selected={index === highlightIndex}
                onClick={() => handleSelect(result)}
              >
                <span className="search-bar__result-category">{result.categoryName}</span>
                {result.matchType === 'unit' && result.unitName && (
                  <span className="search-bar__result-unit">
                    {result.unitSymbol} — {result.unitName}
                  </span>
                )}
              </button>
            ))
          )}
        </div>
      )}
    </div>
  );
}
