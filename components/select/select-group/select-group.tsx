'use client';
import type { SelectGroupProps } from './select-group.types';
import { forwardRef } from 'react';
import { Group } from '@radix-ui/react-select';
import { twMerge } from 'tailwind-merge';
import { selectGroupStyles } from './select-group.styles';

export const SelectGroup = forwardRef<HTMLDivElement, SelectGroupProps>((props, ref) => {
  const { className, children, ...others } = props;

  return (
    <Group ref={ref} className={twMerge(selectGroupStyles(), className)} {...others}>
      {children}
    </Group>
  );
});

SelectGroup.displayName = 'SelectGroup';
