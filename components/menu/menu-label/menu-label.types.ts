import type { HTMLAttributes, ReactNode } from 'react';

export interface MenuLabelProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The content of the menu label.
   */
  children: ReactNode;
}
