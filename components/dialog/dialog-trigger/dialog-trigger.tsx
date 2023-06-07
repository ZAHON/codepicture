'use client';
import type { DialogTriggerProps } from './dialog-trigger.types';
import { forwardRef } from 'react';
import { Trigger } from '@radix-ui/react-dialog';

export const DialogTrigger = forwardRef<HTMLButtonElement, DialogTriggerProps>((props, ref) => {
  const { children, ...others } = props;

  return (
    <Trigger ref={ref} asChild {...others}>
      {children}
    </Trigger>
  );
});

DialogTrigger.displayName = 'DialogTrigger';
