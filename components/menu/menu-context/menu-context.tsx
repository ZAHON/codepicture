'use client';
import type { MenuContextValue, MenuContextProviderProps } from './menu-context.types';
import { createContext, useContext } from 'react';

const MenuContext = createContext<MenuContextValue | undefined>(undefined);

export function MenuContextProvider(props: MenuContextProviderProps) {
  const { value, children } = props;

  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
}

export function useMenuContext() {
  const context = useContext(MenuContext);

  if (context === undefined) {
    throw new Error('useMenuContext must be used within a MenuContextProvider');
  }

  return context;
}
