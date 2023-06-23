import type { TextInputProps } from './text-input.types';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { applayComponentDefaultProps } from '@/utils';
import { textInputStyles } from './text-input.styles';

const defaultProps: Partial<TextInputProps> = {
  variant: 'filled',
  size: 'md',
};

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>((props, ref) => {
  const { variant, size, disabled, invalid, required, className, ...others } =
    applayComponentDefaultProps(defaultProps, props);

  return (
    <input
      ref={ref}
      type="text"
      disabled={disabled}
      aria-required={required ? true : undefined}
      aria-invalid={invalid ? true : undefined}
      data-disabled={disabled ? '' : undefined}
      data-invalid={invalid ? '' : undefined}
      className={twMerge(textInputStyles({ variant, size }), className)}
      {...others}
    />
  );
});

TextInput.displayName = 'TextInput';
