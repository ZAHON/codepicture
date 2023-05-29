import { HTMLAttributes, ReactNode } from 'react';

export interface ScrollAreaViewportProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The content of the scroll area viewport.
   */
  children: ReactNode;
}
