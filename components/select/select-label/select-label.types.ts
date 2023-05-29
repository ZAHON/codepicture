import type { HTMLAttributes, ReactNode } from 'react';

export interface SelectLabelProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The content of the select label.
   */
  children: ReactNode;
}
