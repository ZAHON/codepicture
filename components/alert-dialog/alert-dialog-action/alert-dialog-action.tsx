'use client';
import type { AlertDialogActionProps } from './alert-dialog-action.types';
import { forwardRef } from 'react';
import { Action } from '@radix-ui/react-alert-dialog';

export const AlertDialogAction = forwardRef<HTMLButtonElement, AlertDialogActionProps>(
  (props, ref) => {
    const { children } = props;

    return (
      <Action ref={ref} asChild>
        {children}
      </Action>
    );
  }
);

AlertDialogAction.displayName = 'AlertDialogAction';
