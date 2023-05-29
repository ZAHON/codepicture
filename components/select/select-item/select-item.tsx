'use client';
import type { SelectItemProps } from './select-item.types';
import { forwardRef } from 'react';
import { Item, ItemText } from '@radix-ui/react-select';
import { twMerge } from 'tailwind-merge';
import { useSelectContext } from '../select-context/select-context';
import { selectItemStyles } from './select-item.styles';

export const SelectItem = forwardRef<HTMLDivElement, SelectItemProps>((props, ref) => {
  const { className, children, ...others } = props;

  const { size } = useSelectContext();

  return (
    <Item ref={ref} className={twMerge(selectItemStyles({ size }), className)} {...others}>
      <ItemText>{children}</ItemText>
    </Item>
  );
});

SelectItem.displayName = 'SelectItem';
