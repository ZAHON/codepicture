'use client';
import type { MenuTriggerProps } from './menu-trigger.types';
import { forwardRef } from 'react';
import { Trigger } from '@radix-ui/react-dropdown-menu';
import { applayComponentDefaultProps } from '@/utils';

const defaultProps: Partial<MenuTriggerProps> = {
  asChild: true,
};

export const MenuTrigger = forwardRef<HTMLButtonElement, MenuTriggerProps>((props, ref) => {
  const { children, ...others } = applayComponentDefaultProps(defaultProps, props);

  return (
    <Trigger ref={ref} {...others}>
      {children}
    </Trigger>
  );
});

MenuTrigger.displayName = 'MenuTrigger';
