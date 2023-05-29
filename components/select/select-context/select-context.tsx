'use client';
import type { SelectContextValue, SelectContextProviderProps } from './select-context.types';
import { createContext, useContext } from 'react';

const SelectContext = createContext<SelectContextValue | undefined>(undefined);

export function SelectContextProvider(props: SelectContextProviderProps) {
  const { value, children } = props;

  return <SelectContext.Provider value={value}>{children}</SelectContext.Provider>;
}

export function useSelectContext() {
  const context = useContext(SelectContext);

  if (context === undefined) {
    throw new Error('useSelectContext must be used within a SelectContextProvider');
  }

  return context;
}
