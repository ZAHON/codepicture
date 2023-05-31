'use client';
import type { MenuRadioGroupProps } from './menu-radio-group.types';
import { forwardRef } from 'react';
import { RadioGroup } from '@radix-ui/react-dropdown-menu';
import { twMerge } from 'tailwind-merge';
import { menuRadioGroupStyles } from './menu-radio-group.styles';

export const MenuRadioGroup = forwardRef<HTMLDivElement, MenuRadioGroupProps>((props, ref) => {
  const { className, children, ...others } = props;

  return (
    <RadioGroup ref={ref} className={twMerge(menuRadioGroupStyles(), className)} {...others}>
      {children}
    </RadioGroup>
  );
});

MenuRadioGroup.displayName = 'MenuRadioGroup';
