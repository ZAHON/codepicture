import type { HTMLAttributes, ReactNode } from 'react';

export interface AlertDialogHeaderProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The content of the alert dialog header - `AlertDialogTitle` and `AlertDialogDescription` components.
   */
  children: ReactNode;

  /**
   * The font size of the text inside alert dialog header.
   * @default "lg"
   */
  fontSize?: 'sm' | 'md' | 'lg';
}
