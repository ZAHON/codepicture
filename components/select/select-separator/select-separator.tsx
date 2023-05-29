'use client';
import type { SelectSeparatorProps } from './select-separator.types';
import { forwardRef } from 'react';
import { Separator } from '@radix-ui/react-select';
import { twMerge } from 'tailwind-merge';
import { selectSeparatorStyles } from './select-separator.styles';

export const SelectSeparator = forwardRef<HTMLDivElement, SelectSeparatorProps>((props, ref) => {
  const { className, ...others } = props;

  return (
    <Separator ref={ref} className={twMerge(selectSeparatorStyles(), className)} {...others} />
  );
});

SelectSeparator.displayName = 'SelectSeparator';
