import type { HTMLAttributes, ReactNode } from 'react';

export interface DialogTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  /**
   * The content of the dialog title.
   */
  children: ReactNode;

  /**
   * The font size of the text inside dialog title.
   * @default "lg"
   */
  fontSize?: 'sm' | 'md' | 'lg';
}
