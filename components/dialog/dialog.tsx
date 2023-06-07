'use client';
import type { DialogProps } from './dialog.types';
import { Root } from '@radix-ui/react-dialog';

export function Dialog(props: DialogProps) {
  const { children, ...others } = props;

  return <Root {...others}>{children}</Root>;
}
