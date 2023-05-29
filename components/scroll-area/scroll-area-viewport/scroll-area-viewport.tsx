'use client';
import type { ScrollAreaViewportProps } from './scroll-area-viewport.types';
import { forwardRef } from 'react';
import { Viewport } from '@radix-ui/react-scroll-area';
import { twMerge } from 'tailwind-merge';
import { scrollAreaViewportStyles } from './scroll-area-viewport.styles';

export const ScrollAreaViewport = forwardRef<HTMLDivElement, ScrollAreaViewportProps>(
  (props, ref) => {
    const { className, children, ...others } = props;

    return (
      <Viewport ref={ref} className={twMerge(scrollAreaViewportStyles(), className)} {...others}>
        {children}
      </Viewport>
    );
  }
);

ScrollAreaViewport.displayName = 'ScrollAreaViewport';
