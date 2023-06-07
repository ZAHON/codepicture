'use client';
import type { DialogCloseProps } from './dialog-close.types';
import { forwardRef } from 'react';
import { Close } from '@radix-ui/react-dialog';
import { CloseButton } from '@/components';

export const DialogClose = forwardRef<HTMLButtonElement, DialogCloseProps>((props, ref) => {
  return (
    <Close ref={ref} asChild>
      <CloseButton {...props} />
    </Close>
  );
});

DialogClose.displayName = 'DialogClose';
