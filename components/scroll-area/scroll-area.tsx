'use client';
import type { ScrollAreaProps } from './scroll-area.types';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { Root } from '@radix-ui/react-scroll-area';
import { applayComponentDefaultProps } from '@/utils';
import { scrollAreaStyles } from './scroll-area.styles';

const defaultProps: Partial<ScrollAreaProps> = {
  type: 'hover',
  scrollHideDelay: 600,
};

export const ScrollArea = forwardRef<HTMLDivElement, ScrollAreaProps>((props, ref) => {
  const { className, children, ...others } = applayComponentDefaultProps(defaultProps, props);

  return (
    <Root ref={ref} dir="ltr" className={twMerge(scrollAreaStyles(), className)} {...others}>
      {children}
    </Root>
  );
});

ScrollArea.displayName = 'ScrollArea';
