import { ThemeProvider, themeConfig } from '@/config/themes';
import { ToastProvider } from '@/config/toast';
import React from 'react';
import { RootFooter } from './footer';
import { RootHeader } from './header';

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider config={themeConfig}>
      <ToastProvider>
        <RootHeader />
        {children}
        <RootFooter />
      </ToastProvider>
    </ThemeProvider>
  );
}
