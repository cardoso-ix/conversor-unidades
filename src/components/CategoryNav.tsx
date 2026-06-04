import { useState } from 'react';
import { getCategoriesByGroup } from '../data';
import { getCategoryEmoji } from '../lib/categoryEmojis';
import type { CategoryGroup } from '../lib/types';

interface CategoryNavProps {
  activeCategoryId: string;
  onSelect: (categoryId: string) => void;
}

export function CategoryNav({ activeCategoryId, onSelect }: CategoryNavProps) {
  const groups = getCategoriesByGroup();
  const [collapsed, setCollapsed] = useState<Set<CategoryGroup>>(new Set());

  const toggleGroup = (group: CategoryGroup) => {
    setCollapsed((prev) => {
      const next = new Set(prev);
      if (next.has(group)) {
        next.delete(group);
      } else {
        next.add(group);
      }
      return next;
    });
  };

  return (
    <nav className="category-nav" aria-label="Categorias de conversão">
      {groups.map(({ group, label, items }) => {
        const isCollapsed = collapsed.has(group);
        return (
          <div key={group} className="category-nav__group">
            <button
              type="button"
              className="category-nav__group-header"
              onClick={() => toggleGroup(group)}
              aria-expanded={!isCollapsed}
            >
              <span
                className={`category-nav__chevron${isCollapsed ? ' category-nav__chevron--collapsed' : ''}`}
                aria-hidden="true"
              >
                ▼
              </span>
              {label}
            </button>
            {!isCollapsed && (
              <ul className="category-nav__list">
                {items.map((cat) => (
                  <li key={cat.id}>
                    <button
                      type="button"
                      className={`category-nav__item${cat.id === activeCategoryId ? ' category-nav__item--active' : ''}`}
                      onClick={() => onSelect(cat.id)}
                      aria-current={cat.id === activeCategoryId ? 'page' : undefined}
                    >
                      <span className="category-nav__item-icon" aria-hidden="true">
                        {getCategoryEmoji(cat.id)}
                      </span>
                      <span className="category-nav__item-label">{cat.name}</span>
                      <span className="category-nav__badge" aria-label={`${cat.units.length} unidades`}>
                        {cat.units.length}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        );
      })}
    </nav>
  );
}
