import type { ButtonHTMLAttributes, ReactNode } from 'react';

export interface PopoverTriggerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The button that toggles the popover.
   */
  children: ReactNode;
}
