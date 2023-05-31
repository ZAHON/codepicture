import type { ButtonHTMLAttributes, ReactNode } from 'react';

export interface MenuTriggerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The button that toggles the menu. By default, the `MenuContent` will position itself against the trigger.
   */
  children: ReactNode;
}
