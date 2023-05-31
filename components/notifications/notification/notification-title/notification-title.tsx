'use client';
import type { NotificationTitleProps } from './notification-title.types';
import { twMerge } from 'tailwind-merge';
import { notificationTitleStyles } from './notification-title.styles';

export function NotificationTitle(props: NotificationTitleProps) {
  const { className, children, ...others } = props;

  return (
    <span className={twMerge(notificationTitleStyles(), className)} {...others}>
      {children}
    </span>
  );
}
