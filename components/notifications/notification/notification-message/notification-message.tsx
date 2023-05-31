'use client';
import type { NotificationMessageProps } from './notification-message.types';
import { twMerge } from 'tailwind-merge';

export function NotificationMessage(props: NotificationMessageProps) {
  const { className, children, ...others } = props;

  return (
    <span className={twMerge(className)} {...others}>
      {children}
    </span>
  );
}
