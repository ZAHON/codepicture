import type { HTMLAttributes, ReactNode } from 'react';

export interface DialogFooterProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The content of the dialog footer.
   */
  children: ReactNode;
}
