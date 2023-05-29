'use client';
import type { MenuRadioItemProps } from './menu-radio-item.types';
import { forwardRef } from 'react';
import { RadioItem } from '@radix-ui/react-dropdown-menu';
import { twMerge } from 'tailwind-merge';
import { applayComponentDefaultProps } from '@/utils';
import { useMenuContext } from '../menu-context/menu-context';
import { menuRadioItemStyles } from './menu-radio-item.styles';

const defaultProps: Partial<MenuRadioItemProps> = {
  asChild: false,
};

export const MenuRadioItem = forwardRef<HTMLDivElement, MenuRadioItemProps>((props, ref) => {
  const { className, icon, children, ...others } = applayComponentDefaultProps(defaultProps, props);

  const { size } = useMenuContext();

  return (
    <RadioItem ref={ref} className={twMerge(menuRadioItemStyles({ size }), className)} {...others}>
      {icon && icon}
      {children}
    </RadioItem>
  );
});

MenuRadioItem.displayName = 'MenuRadioItem';
