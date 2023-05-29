import type { HTMLAttributes, ReactNode } from 'react';

export interface MenuRadioGroupProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The content of the menu radio group. Must be `MenuRadioItem` components.
   */
  children: ReactNode;

  /**
   * Change the component to the HTML tag or custom component of the only child. This will merge the original component props with the props of the supplied element/component and change the underlying DOM node.
   * @default false
   */
  asChild?: boolean;

  /**
   * The value of the selected item in the group.
   */
  value?: string;

  /**
   * Event handler called when the value changes.
   */
  onValueChange?: (value: string) => void;
}
