import type { HTMLAttributes, ReactNode } from 'react';

export interface SeparatorLabelProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The font size of the separetor label.
   */
  fontSize?: 'sm' | 'md' | 'lg';

  /**
   * The content of the separetor label.
   */
  children: ReactNode;
}
