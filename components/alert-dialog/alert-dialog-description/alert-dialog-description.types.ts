import type { HTMLAttributes, ReactNode } from 'react';

export interface AlertDialogDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {
  /**
   * The content of the alert dialog description.
   */
  children: ReactNode;
}
