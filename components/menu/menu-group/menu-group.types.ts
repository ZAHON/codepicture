import type { HTMLAttributes, ReactNode } from 'react';

export interface MenuGroupProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The content of the menu group. Must be `MenuItem` component.
   */
  children: ReactNode;

  /**
   * Change the component to the HTML tag or custom component of the only child. This will merge the original component props with the props of the supplied element/component and change the underlying DOM node.
   * @default false
   */
  asChild?: boolean;
}
