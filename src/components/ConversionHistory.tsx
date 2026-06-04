import type { HistoryEntry } from '../hooks/useConversionHistory';

interface ConversionHistoryProps {
  history: HistoryEntry[];
  onSelect: (entry: HistoryEntry) => void;
  onClear: () => void;
  onRemove: (id: string) => void;
}

function formatTime(timestamp: number): string {
  const date = new Date(timestamp);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMin = Math.floor(diffMs / 60000);

  if (diffMin < 1) return 'agora';
  if (diffMin < 60) return `${diffMin} min atrás`;

  const diffH = Math.floor(diffMin / 60);
  if (diffH < 24) return `${diffH}h atrás`;

  return date.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'short',
    hour: '2-digit',
    minute: '2-digit',
  });
}

export function ConversionHistory({
  history,
  onSelect,
  onClear,
  onRemove,
}: ConversionHistoryProps) {
  return (
    <aside className="history-panel" aria-label="Histórico de conversões">
      <div className="history-panel__glass">
        <header className="history-panel__header">
          <div>
            <h2 className="history-panel__title">Histórico</h2>
            <p className="history-panel__subtitle">Últimas conversões</p>
          </div>
          {history.length > 0 && (
            <button
              type="button"
              className="history-panel__clear"
              onClick={onClear}
              title="Limpar histórico"
            >
              Limpar
            </button>
          )}
        </header>

        {history.length === 0 ? (
          <div className="history-panel__empty">
            <span className="history-panel__empty-icon" aria-hidden="true">🕐</span>
            <p>Suas conversões aparecerão aqui</p>
            <span className="history-panel__empty-hint">
              Digite um valor no conversor para começar
            </span>
          </div>
        ) : (
          <ul className="history-panel__list">
            {history.map((entry) => (
              <li key={entry.id} className="history-panel__item">
                <button
                  type="button"
                  className="history-panel__entry"
                  onClick={() => onSelect(entry)}
                >
                  <span className="history-panel__entry-emoji" aria-hidden="true">
                    {entry.categoryEmoji}
                  </span>
                  <span className="history-panel__entry-body">
                    <span className="history-panel__entry-category">
                      {entry.categoryName}
                    </span>
                    <span className="history-panel__entry-conversion">
                      {entry.inputValue} {entry.fromSymbol}
                      <span className="history-panel__entry-arrow"> → </span>
                      {entry.outputValue} {entry.toSymbol}
                    </span>
                    <span className="history-panel__entry-time">
                      {formatTime(entry.timestamp)}
                    </span>
                  </span>
                </button>
                <button
                  type="button"
                  className="history-panel__remove"
                  onClick={(e) => {
                    e.stopPropagation();
                    onRemove(entry.id);
                  }}
                  aria-label="Remover do histórico"
                  title="Remover"
                >
                  ×
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </aside>
  );
}
