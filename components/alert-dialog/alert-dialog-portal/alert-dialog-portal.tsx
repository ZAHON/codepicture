'use client';
import type { AlertDialogPortalProps } from './alert-dialog-portal.types';
import { Portal } from '@radix-ui/react-alert-dialog';

export function AlertDialogPortal(props: AlertDialogPortalProps) {
  const { children, ...others } = props;

  return <Portal {...others}>{children}</Portal>;
}
