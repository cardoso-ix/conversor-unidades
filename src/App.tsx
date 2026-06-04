import { useState } from 'react';
import { CategoryNav } from './components/CategoryNav';
import { ConversionHistory } from './components/ConversionHistory';
import { ConverterPanel } from './components/ConverterPanel';
import { Layout } from './components/Layout';
import { SearchBar } from './components/SearchBar';
import { ThemeToggle } from './components/ThemeToggle';
import { categories, getTotalUnitCount } from './data';
import { useConverter } from './hooks/useConverter';
import {
  useConversionHistory,
  useTrackConversion,
  type HistoryEntry,
} from './hooks/useConversionHistory';
import { getCategoryEmoji } from './lib/categoryEmojis';
import { useTheme } from './hooks/useTheme';

function App() {
  const { theme, toggleTheme } = useTheme();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { history, addEntry, clearHistory, removeEntry } = useConversionHistory();

  const {
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
  } = useConverter();

  useTrackConversion({
    categoryId,
    categoryName: category?.name ?? '',
    categoryEmoji: getCategoryEmoji(categoryId),
    inputValue,
    outputValue,
    fromSymbol: fromUnit?.symbol ?? '',
    toSymbol: toUnit?.symbol ?? '',
    fromUnitId,
    toUnitId,
    error,
    addEntry,
  });

  const handleCategorySelect = (id: string) => {
    selectCategory(id);
    setSidebarOpen(false);
  };

  const handleSearchSelect = (catId: string, unitId?: string) => {
    selectCategoryWithUnit(catId, unitId);
    setSidebarOpen(false);
  };

  const handleHistorySelect = (entry: HistoryEntry) => {
    applyConversion({
      categoryId: entry.categoryId,
      fromUnitId: entry.fromUnitId,
      toUnitId: entry.toUnitId,
      inputValue: entry.inputValue,
    });
  };

  const header = (
    <>
      <button
        type="button"
        className="app-header__menu-btn"
        onClick={() => setSidebarOpen((v) => !v)}
        aria-label={sidebarOpen ? 'Fechar menu de categorias' : 'Abrir menu de categorias'}
        aria-expanded={sidebarOpen}
      >
        {sidebarOpen ? '✕' : '☰'}
      </button>
      <div className="app-header__brand">
        <div className="app-header__logo" aria-hidden="true">CU</div>
        <span className="app-header__title app-header__title--full">Conversor de Unidades</span>
        <span className="app-header__title app-header__title--short">Conversor</span>
      </div>
      <SearchBar onSelect={handleSearchSelect} />
      <div className="app-header__actions">
        <ThemeToggle theme={theme} onToggle={toggleTheme} />
      </div>
    </>
  );

  return (
    <Layout
      header={header}
      sidebar={
        <CategoryNav
          activeCategoryId={categoryId}
          onSelect={handleCategorySelect}
        />
      }
      sidebarOpen={sidebarOpen}
      onCloseSidebar={() => setSidebarOpen(false)}
    >
      <div className="workspace">
        <div className="workspace__converter">
          {category && (
            <ConverterPanel
              category={category}
              inputValue={inputValue}
              outputValue={outputValue}
              fromUnitId={fromUnitId}
              toUnitId={toUnitId}
              fromUnit={fromUnit}
              toUnit={toUnit}
              error={error}
              onInputChange={setInputValue}
              onFromUnitChange={setFromUnitId}
              onToUnitChange={setToUnitId}
              onSwap={swapUnits}
            />
          )}
        </div>

        <div className="workspace__history">
          <ConversionHistory
            history={history}
            onSelect={handleHistorySelect}
            onClear={clearHistory}
            onRemove={removeEntry}
          />
        </div>
      </div>

      <footer className="app-stats">
        {categories.length} categorias · {getTotalUnitCount()} unidades
      </footer>
    </Layout>
  );
}

export default App;
