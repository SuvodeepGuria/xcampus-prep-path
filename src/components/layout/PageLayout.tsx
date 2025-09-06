import React from 'react';
import { Header } from '@/components/navigation/Header';
import { Footer } from '@/components/landing/Footer';

interface PageLayoutProps {
  children: React.ReactNode;
  hideUserSection?: boolean;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ children, hideUserSection }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header hideUserSection={hideUserSection} />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};