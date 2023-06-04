'use client';
import type { PopoverProps } from './popover.types';
import { Root } from '@radix-ui/react-popover';

export function Popover(props: PopoverProps) {
  const { children, ...others } = props;

  return <Root {...others}>{children}</Root>;
}
