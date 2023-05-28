import type { HTMLAttributes, ReactNode } from 'react';

export interface ButtonInnerProps extends HTMLAttributes<HTMLSpanElement> {
  /**
   * The button loading state.
   * @default false
   */
  loading?: boolean;

  /**
   * The content of the button.
   */
  children: ReactNode;
}
