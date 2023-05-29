'use client';
import type { MenuItemProps } from './menu-item.types';
import { forwardRef } from 'react';
import { Item } from '@radix-ui/react-dropdown-menu';
import { twMerge } from 'tailwind-merge';
import { applayComponentDefaultProps } from '@/utils';
import { useMenuContext } from '../menu-context/menu-context';
import { menuItemStyles } from './menu-item.styles';

const defualtProps: Partial<MenuItemProps> = {
  asChild: false,
  color: 'neutral',
};

export const MenuItem = forwardRef<HTMLDivElement, MenuItemProps>((props, ref) => {
  const { color, icon, className, children, ...others } = applayComponentDefaultProps(
    defualtProps,
    props
  );

  const { size } = useMenuContext();

  return (
    <Item ref={ref} className={twMerge(menuItemStyles({ color, size }), className)} {...others}>
      {icon && icon}
      {children}
    </Item>
  );
});

MenuItem.displayName = 'MenuItem';
