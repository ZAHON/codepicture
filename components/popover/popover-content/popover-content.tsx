'use client';
import type { PopoverContentProps } from './popover-content.types';
import { forwardRef } from 'react';
import { Portal, Content } from '@radix-ui/react-popover';
import { twMerge } from 'tailwind-merge';
import { applayComponentDefaultProps } from '@/utils';
import { popoverContentStyles } from './popover-content.styles';

const defaultProps: Partial<PopoverContentProps> = {
  sideOffset: 10,
  withBorder: true,
};

export const PopoverContent = forwardRef<HTMLDivElement, PopoverContentProps>((props, ref) => {
  const { withBorder, forceMount, container, className, children, ...others } =
    applayComponentDefaultProps(defaultProps, props);

  return (
    <Portal forceMount={forceMount} container={container}>
      <Content
        ref={ref}
        className={twMerge(popoverContentStyles({ withBorder }), className)}
        {...others}
      >
        {children}
      </Content>
    </Portal>
  );
});

PopoverContent.displayName = 'PopoverContent';
