import type { HTMLAttributes, ReactNode } from 'react';

export interface MenuRadioGroupProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The content of the menu radio group. Must be `MenuRadioItem` components.
   */
  children: ReactNode;

  /**
   * The value of the selected item in the group.
   */
  value?: string;

  /**
   * Event handler called when the value changes.
   */
  onValueChange?: (value: string) => void;
}
