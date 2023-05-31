'use client';
import type { AlertDialogCancelProps } from './alert-dialog-cancel.types';
import { forwardRef } from 'react';
import { Cancel } from '@radix-ui/react-alert-dialog';

export const AlertDialogCancel = forwardRef<HTMLButtonElement, AlertDialogCancelProps>(
  (props, ref) => {
    const { children } = props;

    return (
      <Cancel ref={ref} asChild>
        {children}
      </Cancel>
    );
  }
);

AlertDialogCancel.displayName = 'AlertDialogCancel';
