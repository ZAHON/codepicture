'use client';
import type { MenuTriggerProps } from './menu-trigger.types';
import { forwardRef } from 'react';
import { Trigger } from '@radix-ui/react-dropdown-menu';

export const MenuTrigger = forwardRef<HTMLButtonElement, MenuTriggerProps>((props, ref) => {
  const { children, ...others } = props;

  return (
    <Trigger ref={ref} asChild {...others}>
      {children}
    </Trigger>
  );
});

MenuTrigger.displayName = 'MenuTrigger';
