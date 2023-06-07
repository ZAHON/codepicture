'use client';
import type { DialogPortalProps } from './dialog-portal.types';
import { Portal } from '@radix-ui/react-dialog';

export function DialogPortal(props: DialogPortalProps) {
  const { children, ...others } = props;

  return <Portal {...others}>{children}</Portal>;
}
