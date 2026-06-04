import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import type { Unit } from '../lib/types';

interface UnitSelectProps {
  units: Unit[];
  value: string;
  onChange: (unitId: string) => void;
  label: string;
}

interface DropdownStyle {
  top: number;
  left: number;
  width: number;
  maxHeight: number;
}

const VIEWPORT_PADDING = 8;
const DROPDOWN_GAP = 4;

function computeDropdownStyle(trigger: HTMLElement): DropdownStyle {
  const rect = trigger.getBoundingClientRect();
  const vw = window.innerWidth;
  const vh = window.innerHeight;

  const width = Math.min(rect.width, vw - VIEWPORT_PADDING * 2);

  let left = rect.left;
  if (left + width > vw - VIEWPORT_PADDING) {
    left = vw - VIEWPORT_PADDING - width;
  }
  if (left < VIEWPORT_PADDING) {
    left = VIEWPORT_PADDING;
  }

  const spaceBelow = vh - rect.bottom - DROPDOWN_GAP - VIEWPORT_PADDING;
  const spaceAbove = rect.top - DROPDOWN_GAP - VIEWPORT_PADDING;
  const preferBelow = spaceBelow >= 160 || spaceBelow >= spaceAbove;

  const maxHeight = Math.min(280, Math.max(120, preferBelow ? spaceBelow : spaceAbove));

  const top = preferBelow
    ? rect.bottom + DROPDOWN_GAP
    : rect.top - DROPDOWN_GAP - maxHeight;

  return { top, left, width, maxHeight };
}

export function UnitSelect({ units, value, onChange, label }: UnitSelectProps) {
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState('');
  const [dropdownStyle, setDropdownStyle] = useState<DropdownStyle | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selected = units.find((u) => u.id === value);

  const filtered = filter.trim()
    ? units.filter(
        (u) =>
          u.name.toLowerCase().includes(filter.toLowerCase()) ||
          u.symbol.toLowerCase().includes(filter.toLowerCase()) ||
          u.id.toLowerCase().includes(filter.toLowerCase()),
      )
    : units;

  const updatePosition = useCallback(() => {
    if (!triggerRef.current) return;
    setDropdownStyle(computeDropdownStyle(triggerRef.current));
  }, []);

  useLayoutEffect(() => {
    if (!open) {
      setDropdownStyle(null);
      return;
    }
    updatePosition();
  }, [open, updatePosition]);

  useEffect(() => {
    if (!open) return;

    const handleReposition = () => updatePosition();
    window.addEventListener('resize', handleReposition);
    window.addEventListener('scroll', handleReposition, true);

    return () => {
      window.removeEventListener('resize', handleReposition);
      window.removeEventListener('scroll', handleReposition, true);
    };
  }, [open, updatePosition]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      const target = e.target as Node;
      if (
        containerRef.current?.contains(target) ||
        dropdownRef.current?.contains(target)
      ) {
        return;
      }
      setOpen(false);
      setFilter('');
    }

    function handleEscape(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setOpen(false);
        setFilter('');
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const handleSelect = (unitId: string) => {
    onChange(unitId);
    setOpen(false);
    setFilter('');
  };

  const toggleOpen = () => {
    setOpen((prev) => {
      if (prev) setFilter('');
      return !prev;
    });
  };

  const dropdown =
    open && dropdownStyle
      ? createPortal(
          <div
            ref={dropdownRef}
            className="unit-select__dropdown unit-select__dropdown--portal"
            style={{
              top: dropdownStyle.top,
              left: dropdownStyle.left,
              width: dropdownStyle.width,
              maxWidth: `calc(100vw - ${VIEWPORT_PADDING * 2}px)`,
            }}
            role="presentation"
          >
            <input
              type="text"
              className="unit-select__search"
              placeholder="Buscar unidade..."
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              autoFocus
            />
            <ul
              className="unit-select__list"
              role="listbox"
              style={{ maxHeight: dropdownStyle.maxHeight }}
            >
              {filtered.map((unit) => (
                <li key={unit.id}>
                  <button
                    type="button"
                    className={`unit-select__option${unit.id === value ? ' unit-select__option--selected' : ''}`}
                    role="option"
                    aria-selected={unit.id === value}
                    onClick={() => handleSelect(unit.id)}
                  >
                    <span className="unit-select__option-symbol">{unit.symbol}</span>
                    <span className="unit-select__option-name">{unit.name}</span>
                  </button>
                </li>
              ))}
              {filtered.length === 0 && (
                <li className="search-bar__empty">Nenhuma unidade encontrada</li>
              )}
            </ul>
          </div>,
          document.body,
        )
      : null;

  return (
    <div className="unit-select" ref={containerRef}>
      <span className="sr-only">{label}</span>
      <button
        ref={triggerRef}
        type="button"
        className={`unit-select__trigger${open ? ' unit-select__trigger--open' : ''}`}
        onClick={toggleOpen}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className="unit-select__symbol">{selected?.symbol ?? '—'}</span>
        <span className="unit-select__name">{selected?.name ?? 'Selecionar'}</span>
        <span className="unit-select__arrow" aria-hidden="true">▼</span>
      </button>
      {dropdown}
    </div>
  );
}
