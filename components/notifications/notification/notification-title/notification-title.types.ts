import type { HTMLAttributes, ReactNode } from 'react';

export interface NotificationTitleProps extends HTMLAttributes<HTMLSpanElement> {
  /**
   * The content of the notification title.
   */
  children: ReactNode;
}
