'use client';
import type { MenuProps } from './menu.types';
import { Root } from '@radix-ui/react-dropdown-menu';
import { applayComponentDefaultProps } from '@/utils';

const defaultProps: Partial<MenuProps> = {
  modal: true,
};

export function Menu(props: MenuProps) {
  const { children, ...others } = applayComponentDefaultProps(defaultProps, props);

  return (
    <Root dir="ltr" {...others}>
      {children}
    </Root>
  );
}
