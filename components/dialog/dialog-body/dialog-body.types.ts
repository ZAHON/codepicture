import type { HTMLAttributes, ReactNode } from 'react';

export interface DialogBodyProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The content of the dialog body.
   */
  children: ReactNode;

  /**
   * The font size of the text inside dialog body.
   * @default "md"
   */
  fontSize?: 'sm' | 'md' | 'lg';
}
