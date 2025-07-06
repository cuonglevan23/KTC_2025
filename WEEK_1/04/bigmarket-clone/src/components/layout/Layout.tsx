import { Header } from './Header';
import { Footer } from './Footer';
import type { LayoutProps } from '../../types';

export function Layout({ children, className }: LayoutProps) {
  return (
    <div className={`min-h-screen flex flex-col ${className || ''}`}>
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
