'use client';
import type { MenuLabelProps } from './menu-label.types';
import { forwardRef } from 'react';
import { Label } from '@radix-ui/react-dropdown-menu';
import { twMerge } from 'tailwind-merge';
import { applayComponentDefaultProps } from '@/utils';
import { menuLabelStyles } from './menu-label.styles';

const defaultProps: Partial<MenuLabelProps> = {
  asChild: false,
};

export const MenuLabel = forwardRef<HTMLDivElement, MenuLabelProps>((props, ref) => {
  const { className, children, ...others } = applayComponentDefaultProps(defaultProps, props);

  return (
    <Label ref={ref} className={twMerge(menuLabelStyles(), className)} {...others}>
      {children}
    </Label>
  );
});

MenuLabel.displayName = 'MenuLabel';
