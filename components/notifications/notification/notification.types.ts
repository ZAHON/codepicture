import type { HTMLAttributes, SVGProps } from 'react';
import type { CloseButtonProps, LoaderProps } from '@/components';
import type { NotificationBodyProps } from './notification-body';
import type { NotificationTitleProps } from './notification-title';
import type { NotificationMessageProps } from './notification-message';

type HTMLAttributesToOmt = 'title' | 'children';

export interface NotificationProps
  extends Omit<HTMLAttributes<HTMLDivElement>, HTMLAttributesToOmt> {
  /**
   * The state of the notification.
   */
  visible: boolean;

  /**
   * The type of the notification.
   */
  type: 'info' | 'success' | 'warning' | 'error' | 'loading';

  /**
   * The message of the notification.
   */
  message: string;

  /**
   * The title of the notification.
   */
  title?: string;

  /**
   * The font size of the text inside notification.
   * @default "md"
   */
  fontSize?: 'sm' | 'md' | 'lg';

  /**
   * If `true`, notification will have border.
   * @default true
   */
  withBorder?: boolean;

  /**
   * If `true`, notification will have close button.
   * @default true
   */
  withCloseButton?: boolean;

  /**
   * Event handler called when user click close button.
   */
  onClose?: () => void;

  /**
   * Properties spread to `NotificationBody` component. This component includes `NotificationTitle` and `NotificationMessage` components.
   */
  bodyProps?: Omit<NotificationBodyProps, 'children'>;

  /**
   * Properties spread to `NotificationTitle` component.
   */
  titleProps?: Omit<NotificationTitleProps, 'children'>;

  /**
   * Properties spread to `NotificationMessage` component.
   */
  messageProps?: Omit<NotificationMessageProps, 'children'>;

  /**
   * Properties spread to `CloseButton` component.
   */
  closeButtonProps?: Omit<CloseButtonProps, 'onClick'>;

  /**
   * Properties spread to `Loader` component.
   */
  loaderProps?: LoaderProps;

  /**
   * Properties spread to `NotificationIcon` component.
   */
  iconProps?: SVGProps<SVGSVGElement>;
}
