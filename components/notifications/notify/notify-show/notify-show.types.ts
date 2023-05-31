import type { NotificationProps } from '@/components/notifications/notification';

export interface NotifyShowArgs extends NotificationProps {
  /**
   * The id attribute of the notification.
   */
  id?: string;

  /**
   * The position of the notification.
   * @default "bottom-right"
   */
  position?:
    | 'top-left'
    | 'top-center'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-center'
    | 'bottom-right';

  /**
   * Replace notification duration provided by `type` property.
   *
   * `info` - 4000
   *
   * `success` - 2000
   *
   * `warning` - 4000
   *
   * `error` - 4000
   *
   * `loading` - Infinity
   */
  duration?: number;
}
