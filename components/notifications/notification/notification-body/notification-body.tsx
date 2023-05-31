'use client';
import type { NotificationBodyProps } from './notification-body.types';
import { twMerge } from 'tailwind-merge';
import { notificationBodyStyles } from './notification-body.styles';

export function NotificationBody(props: NotificationBodyProps) {
  const { className, children, ...others } = props;

  return (
    <div className={twMerge(notificationBodyStyles(), className)} {...others}>
      {children}
    </div>
  );
}
