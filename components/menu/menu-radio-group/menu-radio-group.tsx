'use client';
import type { MenuRadioGroupProps } from './menu-radio-group.types';
import { forwardRef } from 'react';
import { RadioGroup } from '@radix-ui/react-dropdown-menu';
import { twMerge } from 'tailwind-merge';
import { applayComponentDefaultProps } from '@/utils';
import { menuRadioGroupStyles } from './menu-radio-group.styles';

const defaultProps: Partial<MenuRadioGroupProps> = {
  asChild: false,
};

export const MenuRadioGroup = forwardRef<HTMLDivElement, MenuRadioGroupProps>((props, ref) => {
  const { className, children, ...others } = applayComponentDefaultProps(defaultProps, props);

  return (
    <RadioGroup ref={ref} className={twMerge(menuRadioGroupStyles(), className)} {...others}>
      {children}
    </RadioGroup>
  );
});

MenuRadioGroup.displayName = 'MenuRadioGroup';
