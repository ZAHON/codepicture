'use client';
import type {
  SegmentedTabsContextValue,
  SegmentedTabsContextProviderProps,
} from './segmented-tabs-context.types';
import { createContext, useContext } from 'react';

const SegmentedTabsContext = createContext<SegmentedTabsContextValue | undefined>(undefined);

export function SegmentedTabsContextProvider(props: SegmentedTabsContextProviderProps) {
  const { value, children } = props;

  return <SegmentedTabsContext.Provider value={value}>{children}</SegmentedTabsContext.Provider>;
}

export function useSegmentedTabsContext() {
  const context = useContext(SegmentedTabsContext);

  if (context === undefined) {
    throw new Error('useSegmentedTabsContext must be used within a SegmentedTabsContext');
  }

  return context;
}
