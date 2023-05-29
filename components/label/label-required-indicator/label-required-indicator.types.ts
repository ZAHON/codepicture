import type { HTMLAttributes, ReactNode } from 'react';

export interface LabelRequiredIndicatorProps extends HTMLAttributes<HTMLSpanElement> {
  /**
   * The content of the label required indicator.
   */
  children: ReactNode;
}
