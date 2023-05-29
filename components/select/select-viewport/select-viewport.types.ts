import type { HTMLAttributes, ReactNode } from 'react';

export interface SelectViewportProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The content of the select viewport.
   */
  children: ReactNode;
}
