import type { ReactNode } from 'react';

export type SegmentedTabsContextValue = {
  value?: string;
};

export type SegmentedTabsContextProviderProps = {
  value: SegmentedTabsContextValue;
  children: ReactNode;
};
