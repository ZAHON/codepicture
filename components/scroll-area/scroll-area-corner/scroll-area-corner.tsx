'use client';
import type { ScrollAreaCornerProps } from './scroll-area-corner.types';
import { forwardRef } from 'react';
import { Corner } from '@radix-ui/react-scroll-area';
import { twMerge } from 'tailwind-merge';
import { scrollAreaCornerStyles } from './scroll-area-corner.styles';

export const ScrollAreaCorner = forwardRef<HTMLDivElement, ScrollAreaCornerProps>((props, ref) => {
  const { className, ...others } = props;

  return <Corner ref={ref} className={twMerge(scrollAreaCornerStyles(), className)} {...others} />;
});

ScrollAreaCorner.displayName = 'ScrollAreaCorner';
