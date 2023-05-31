import type { HTMLAttributes, ReactNode } from 'react';

export interface AlertDialogFooterProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The content of the alert dialog footer - `AlertDialogCancel` and  `AlertDialogAction` components.
   */
  children: ReactNode;
}
