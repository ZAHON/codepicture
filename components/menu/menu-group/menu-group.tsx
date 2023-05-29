'use client';
import type { MenuGroupProps } from './menu-group.types';
import { forwardRef } from 'react';
import { Group } from '@radix-ui/react-dropdown-menu';
import { twMerge } from 'tailwind-merge';
import { applayComponentDefaultProps } from '@/utils';
import { menuGroupStyles } from './menu-group.styles';

const defaultProps: Partial<MenuGroupProps> = {
  asChild: false,
};

export const MenuGroup = forwardRef<HTMLDivElement, MenuGroupProps>((props, ref) => {
  const { className, children, ...others } = applayComponentDefaultProps(defaultProps, props);

  return (
    <Group ref={ref} className={twMerge(menuGroupStyles(), className)} {...others}>
      {children}
    </Group>
  );
});

MenuGroup.displayName = 'MenuGroup';
