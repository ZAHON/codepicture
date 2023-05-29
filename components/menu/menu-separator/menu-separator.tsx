'use client';
import type { MenuSeparatorProps } from './menu-separator.types';
import { forwardRef } from 'react';
import { Separator } from '@radix-ui/react-dropdown-menu';
import { twMerge } from 'tailwind-merge';
import { menuSeparatorStyles } from './menu-separator.styles';

export const MenuSeparator = forwardRef<HTMLDivElement, MenuSeparatorProps>((props, ref) => {
  const { className, ...others } = props;

  return <Separator ref={ref} className={twMerge(menuSeparatorStyles(), className)} {...others} />;
});

MenuSeparator.displayName = 'MenuSeparator';
