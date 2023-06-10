import type { ReactNode } from 'react';

export interface MenuProps {
  /**
   * The content of the menu.
   */
  children: ReactNode;

  /**
   * The open state of the menu when it is initially rendered. Use when you do not need to control its open state.
   */
  defaultOpen?: boolean;

  /**
   * The controlled open state of the menu. Must be used in conjunction with `onOpenChange` property.
   */
  open?: boolean;

  /**
   * Event handler called when the open state of the dropdown menu changes.
   */
  onOpenChange?: (open: boolean) => void;

  /**
   * The modality of the menu. When set to true, interaction with outside elements will be disabled and only menu content will be visible to screen readers.
   * @default true
   */
  modal?: boolean;
}
