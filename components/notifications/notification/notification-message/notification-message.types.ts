import type { HTMLAttributes, ReactNode } from 'react';

export interface NotificationMessageProps extends HTMLAttributes<HTMLSpanElement> {
  /**
   * The content of the notification message.
   */
  children: ReactNode;
}
