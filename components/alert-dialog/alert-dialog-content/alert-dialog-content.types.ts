import type { HTMLAttributes, ReactNode } from 'react';

export interface AlertDialogContentProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The content of the alert dialog content - `AlertDialogHeader` and `AlertDialogFooter` components.
   */
  children: ReactNode;

  /**
   * If `true`, alert dialog content will have border.
   * @default true
   */
  withBorder?: boolean;

  /**
   * Event handler called when focus moves to the destructive action after opening. It can be prevented by calling `event.preventDefault`.
   */
  onOpenAutoFocus?: (event: Event) => void;

  /**
   * Event handler called when focus moves to the trigger after closing. It can be prevented by calling `event.preventDefault`.
   */
  onCloseAutoFocus?: (event: Event) => void;

  /**
   * Event handler called when the escape key is down. It can be prevented by calling `event.preventDefault`.
   */
  onEscapeKeyDown?: (event: KeyboardEvent) => void;
}
