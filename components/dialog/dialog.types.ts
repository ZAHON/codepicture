import type { ReactNode } from 'react';

export interface DialogProps {
  /**
   * The content of the dialog - `DialogTrigger` and `DialogPortal` components.
   */
  children: ReactNode;

  /**
   * The open state of the dialog when it is initially rendered. Use when you do not need to control its open state.
   */
  defaultOpen?: boolean;

  /**
   * The controlled open state of the dialog. Must be used in conjunction with `onOpenChange` property.
   */
  open?: boolean;

  /**
   * Event handler called when the open state of the dialog changes.
   */
  onOpenChange?: (open: boolean) => void;

  /**
   * The modality of the dialog. When set to `true`, interaction with outside elements will be disabled and only dialog content will be visible to screen readers.
   * @default true
   */
  modal?: boolean;
}
