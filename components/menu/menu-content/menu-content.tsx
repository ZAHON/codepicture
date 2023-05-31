'use client';
import type { MenuContentProps } from './menu-content.types';
import { forwardRef } from 'react';
import { Portal, Content } from '@radix-ui/react-dropdown-menu';
import { twMerge } from 'tailwind-merge';
import { applayComponentDefaultProps } from '@/utils';
import { MenuContextProvider } from '../menu-context/menu-context';
import { menuContentStyles } from './menu-content.styles';

const defaultProps: Partial<MenuContentProps> = {
  size: 'md',
  loop: true,
  sideOffset: 10,
};

export const MenuContent = forwardRef<HTMLDivElement, MenuContentProps>((props, ref) => {
  const { size, forceMount, container, className, children, ...others } =
    applayComponentDefaultProps(defaultProps, props);

  return (
    <Portal forceMount={forceMount} container={container}>
      <Content ref={ref} className={twMerge(menuContentStyles(), className)} {...others}>
        <MenuContextProvider value={{ size }}>{children}</MenuContextProvider>
      </Content>
    </Portal>
  );
});

MenuContent.displayName = 'MenuContent';
