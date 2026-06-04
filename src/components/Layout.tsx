import type { ReactNode } from 'react';

interface LayoutProps {
  header: ReactNode;
  sidebar: ReactNode;
  children: ReactNode;
  sidebarOpen: boolean;
  onCloseSidebar: () => void;
}

export function Layout({
  header,
  sidebar,
  children,
  sidebarOpen,
  onCloseSidebar,
}: LayoutProps) {
  return (
    <div className="app-shell">
      <header className="app-header">{header}</header>
      <div className="app-body">
        <div
          className={`sidebar-overlay${sidebarOpen ? ' sidebar-overlay--visible' : ''}`}
          onClick={onCloseSidebar}
          aria-hidden="true"
        />
        <aside className={`sidebar${sidebarOpen ? ' sidebar--open' : ''}`}>
          {sidebar}
        </aside>
        <main className="main-content">{children}</main>
      </div>
      <footer className="app-footer">
        <p className="app-footer__text">Desenvolvido por Eduardo Cardoso · 2026</p>
      </footer>
    </div>
  );
}
