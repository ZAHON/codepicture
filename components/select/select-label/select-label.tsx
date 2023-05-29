'use client';
import type { SelectLabelProps } from './select-label.types';
import { forwardRef } from 'react';
import { Label } from '@radix-ui/react-select';
import { twMerge } from 'tailwind-merge';
import { selectLabelStyles } from './select-label.styles';

export const SelectLabel = forwardRef<HTMLDivElement, SelectLabelProps>((props, ref) => {
  const { className, children, ...others } = props;

  return (
    <Label ref={ref} className={twMerge(selectLabelStyles(), className)} {...others}>
      {children}
    </Label>
  );
});

SelectLabel.displayName = 'SelectLabel';
