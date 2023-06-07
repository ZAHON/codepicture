import type { HTMLAttributes, ReactNode } from 'react';

export interface DialogHeaderProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The content of the dialog header - `DialogTitle` and `DialogClose` components.
   */
  children: ReactNode;
}
