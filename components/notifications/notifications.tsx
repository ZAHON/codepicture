'use client';
import type { CSSProperties } from 'react';
import type { NotificationsProps } from './notifications.types';
import { Toaster } from 'react-hot-toast';
import { applayComponentDefaultProps } from '@/utils';

const defaultProps: Partial<NotificationsProps> = {
  position: 'bottom-right',
  gutter: 10,
  topOffset: 10,
  rightOffset: 10,
  bottomOffset: 10,
  leftOffset: 10,
};

export function Notifications(props: NotificationsProps) {
  const { topOffset, rightOffset, bottomOffset, leftOffset, ...others } =
    applayComponentDefaultProps(defaultProps, props);

  const containerStyle: CSSProperties = {
    top: topOffset,
    right: rightOffset,
    bottom: bottomOffset,
    left: leftOffset,
  };

  return <Toaster containerStyle={containerStyle} {...others} />;
}
