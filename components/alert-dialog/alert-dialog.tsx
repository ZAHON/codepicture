'use client';
import type { AlertDialogProps } from './alert-dialog.types';
import { Root } from '@radix-ui/react-alert-dialog';

export function AlertDialog(props: AlertDialogProps) {
  const { children, ...others } = props;

  return <Root {...others}>{children}</Root>;
}
