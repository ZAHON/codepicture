import type { ButtonHTMLAttributes, ReactNode } from 'react';

export interface MenuTriggerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The button that toggles the menu. By default, the `MenuContent` will position itself against the trigger.
   */
  children: ReactNode;

  /**
   * Change the component to the HTML tag or custom component of the only child. This will merge the original component props with the props of the supplied element/component and change the underlying DOM node.
   * @default true
   */
  asChild?: boolean;
}
