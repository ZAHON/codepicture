'use client';
import type { SelectProps } from './select.types';
import { forwardRef } from 'react';
import { Root, Trigger, Value, Icon } from '@radix-ui/react-select';
import { IconSelector } from '@tabler/icons-react';
import { twMerge } from 'tailwind-merge';
import { applayComponentDefaultProps } from '@/utils';
import { getSelectIconSize } from './utils';
import { SelectContextProvider } from './select-context/select-context';
import { selectStyles } from './select.styles';

const defaultProps: Partial<SelectProps> = {
  size: 'md',
};

export const Select = forwardRef<HTMLButtonElement, SelectProps>((props, ref) => {
  const {
    size,
    defaultValue,
    value,
    onValueChange,
    defaultOpen,
    open,
    onOpenChange,
    name,
    disabled,
    required,
    placeholder,
    className,
    children,
    ...others
  } = applayComponentDefaultProps(defaultProps, props);

  const rootProps = {
    defaultValue,
    value,
    onValueChange,
    defaultOpen,
    open,
    onOpenChange,
    name,
    disabled,
    required,
  };

  const selectIconSize = getSelectIconSize(size);

  return (
    <Root dir="ltr" {...rootProps}>
      <Trigger ref={ref} className={twMerge(selectStyles({ size }), className)} {...others}>
        <Value placeholder={placeholder} />
        <Icon>
          <IconSelector size={selectIconSize} aria-hidden="true" focusable="false" />
        </Icon>
      </Trigger>
      <SelectContextProvider value={{ size }}>{children}</SelectContextProvider>
    </Root>
  );
});

Select.displayName = 'Select';
