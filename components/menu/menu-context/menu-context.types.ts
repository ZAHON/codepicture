import type { ReactNode } from 'react';
import type { MenuContentProps } from '../menu-content/menu-content.types';

export type MenuContextValue = {
  /**
   * The size of the menu content.
   */
  size: MenuContentProps['size'];
};

export type MenuContextProviderProps = {
  value: MenuContextValue;
  children: ReactNode;
};
