import type { ReactNode } from 'react';

export interface AlertDialogProps {
  /**
   * The content of the alert dialog - `AlertDialogTrigger` and `AlertDialogContent` components.
   */
  children: ReactNode;

  /**
   * The open state of the alert dialog when it is initially rendered. Use when you do not need to control its open state.
   */
  defaultOpen?: boolean;

  /**
   * The controlled open state of the alert dialog. Must be used in conjunction with `onOpenChange` property.
   */
  open?: boolean;

  /**
   * Event handler called when the open state of the alert dialog changes.
   */
  onOpenChange?: (open: boolean) => void;
}
