import type { HTMLAttributes, ReactNode } from 'react';

export interface AlertDialogTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  /**
   * The content of the alert dialog title.
   */
  children: ReactNode;
}
