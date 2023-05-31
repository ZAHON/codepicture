import type { HTMLAttributes, ReactNode } from 'react';

export interface NotificationBodyProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The content of the notification body - `NotificationTitle` and `NotificationMessage` components.
   */
  children: ReactNode;
}
