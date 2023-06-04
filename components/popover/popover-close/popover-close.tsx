'use client';
import type { PopoverCloseProps } from './popover-close.types';
import { forwardRef } from 'react';
import { Close } from '@radix-ui/react-popover';
import { CloseButton } from '@/components';

export const PopoverClose = forwardRef<HTMLButtonElement, PopoverCloseProps>((props, ref) => {
  return (
    <Close ref={ref} asChild>
      <CloseButton {...props} />
    </Close>
  );
});

PopoverClose.displayName = 'PopoverClose';
