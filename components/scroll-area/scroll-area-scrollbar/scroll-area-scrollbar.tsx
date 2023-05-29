'use client';
import type { ScrollAreaScrollbarProps } from './scroll-area-scrollbar.types';
import { forwardRef } from 'react';
import { Scrollbar } from '@radix-ui/react-scroll-area';
import { twMerge } from 'tailwind-merge';
import { scrollAreaScrollbarStyles } from './scroll-area-scrollbar.styles';

export const ScrollAreaScrollbar = forwardRef<HTMLDivElement, ScrollAreaScrollbarProps>(
  (props, ref) => {
    const { className, children, ...others } = props;

    return (
      <Scrollbar ref={ref} className={twMerge(scrollAreaScrollbarStyles(), className)} {...others}>
        {children}
      </Scrollbar>
    );
  }
);

ScrollAreaScrollbar.displayName = 'ScrollAreaScrollbar';
