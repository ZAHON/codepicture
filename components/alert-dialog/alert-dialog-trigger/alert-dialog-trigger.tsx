'use client';
import type { AlertDialogTriggerProps } from './alert-dialog-trigger.types';
import { forwardRef } from 'react';
import { Trigger } from '@radix-ui/react-alert-dialog';

export const AlertDialogTrigger = forwardRef<HTMLButtonElement, AlertDialogTriggerProps>(
  (props, ref) => {
    const { children } = props;

    return (
      <Trigger ref={ref} asChild>
        {children}
      </Trigger>
    );
  }
);

AlertDialogTrigger.displayName = 'AlertDialogTrigger';
