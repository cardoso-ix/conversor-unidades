import { useLayoutEffect, useRef, useState } from 'react';
import { getDisplaySizeFromText, type DisplaySize } from '../lib/format';

const SIZE_CLASS: Record<DisplaySize, string> = {
  lg: '',
  md: ' converter-field__input--md',
  sm: ' converter-field__input--sm',
  xs: ' converter-field__input--xs',
};

const FONT_SIZES_PX = [26, 22, 18, 16, 16];

function isMobileViewport(): boolean {
  return window.matchMedia('(max-width: 480px)').matches;
}

interface AdaptiveResultFieldProps {
  id: string;
  value: string;
  animating?: boolean;
}

export function AdaptiveResultField({ id, value, animating }: AdaptiveResultFieldProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [fontSize, setFontSize] = useState<number | null>(null);
  const sizeClass = SIZE_CLASS[getDisplaySizeFromText(value)];

  useLayoutEffect(() => {
    const el = inputRef.current;
    if (!el || !value || value === '—') {
      setFontSize(null);
      return;
    }

    const minPx = isMobileViewport() ? 16 : 12;
    const sizes = isMobileViewport()
      ? [16]
      : FONT_SIZES_PX;

    for (const px of sizes) {
      el.style.fontSize = `${px}px`;
      if (el.scrollWidth <= el.clientWidth) {
        setFontSize(Math.max(px, minPx));
        return;
      }
    }
    setFontSize(minPx);
  }, [value]);

  return (
    <input
      ref={inputRef}
      id={id}
      type="text"
      readOnly
      className={`converter-field__input converter-field__input--readonly${sizeClass}${animating ? ' converter-field__input--pulse' : ''}`}
      style={fontSize !== null ? { fontSize: `${fontSize}px` } : undefined}
      value={value}
      tabIndex={-1}
      aria-readonly="true"
      aria-live="polite"
      title={value}
    />
  );
}
