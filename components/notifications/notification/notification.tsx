'use client';
import type { NotificationProps } from './notification.types';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { applayComponentDefaultProps } from '@/utils';
import { CloseButton, Loader } from '@/components';
import { NotificationIcon } from './notification-icon';
import { NotificationBody } from './notification-body';
import { NotificationTitle } from './notification-title';
import { NotificationMessage } from './notification-message';
import { notificationStyles } from './notification.styles';

const defaultProps: Partial<NotificationProps> = {
  fontSize: 'md',
  withBorder: true,
  withCloseButton: true,
};

export const Notification = forwardRef<HTMLDivElement, NotificationProps>((props, ref) => {
  const {
    visible,
    type,
    title,
    message,
    fontSize,
    withBorder,
    withCloseButton,
    onClose,
    className,
    bodyProps,
    titleProps,
    messageProps,
    closeButtonProps,
    loaderProps,
    iconProps,
    ...others
  } = applayComponentDefaultProps(defaultProps, props);

  return (
    <div
      ref={ref}
      role="status"
      aria-live="polite"
      className={twMerge(notificationStyles({ visible, fontSize, withBorder }), className)}
      {...others}
    >
      {type === 'loading' && <Loader size={28} color="currentColor" {...loaderProps} />}
      {type !== 'loading' && <NotificationIcon type={type} {...iconProps} />}
      <NotificationBody {...bodyProps}>
        {title && <NotificationTitle {...titleProps}>{title}</NotificationTitle>}
        <NotificationMessage {...messageProps}>{message}</NotificationMessage>
      </NotificationBody>
      {withCloseButton && (
        <CloseButton variant="subtle" size="sm" onClick={onClose} {...closeButtonProps} />
      )}
    </div>
  );
});

Notification.displayName = 'Notification';
