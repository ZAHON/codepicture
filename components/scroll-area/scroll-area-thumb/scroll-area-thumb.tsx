'use client';
import type { ScrollAreaThumbProps } from './scroll-area-thumb.types';
import { forwardRef } from 'react';
import { Thumb } from '@radix-ui/react-scroll-area';
import { twMerge } from 'tailwind-merge';
import { scrollAreaThumbStyles } from './scroll-area-thumb.styles';

export const ScrollAreaThumb = forwardRef<HTMLDivElement, ScrollAreaThumbProps>((props, ref) => {
  const { className, ...others } = props;

  return <Thumb ref={ref} className={twMerge(scrollAreaThumbStyles(), className)} {...others} />;
});

ScrollAreaThumb.displayName = 'ScrollAreaThumb';
