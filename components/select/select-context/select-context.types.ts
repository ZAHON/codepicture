import type { ReactNode } from 'react';
import type { SelectProps } from '../select.types';

export type SelectContextValue = {
  /**
   * The size of the elements inside context.
   */
  size: SelectProps['size'];
};

export type SelectContextProviderProps = {
  value: SelectContextValue;
  children: ReactNode;
};
