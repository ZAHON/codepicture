import type { ButtonHTMLAttributes, ReactNode } from 'react';

export interface DialogTriggerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The button that opens the dialog.
   */
  children: ReactNode;
}
