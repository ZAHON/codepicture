import type { ButtonProps } from './button.types';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { applayComponentDefaultProps } from '@/utils';
import { ButtonInner } from './button-inner';
import { ButtonLoader } from './button-loader';
import { buttonStyles } from './button.styles';

const defaultProps: Partial<ButtonProps> = {
  type: 'button',
  size: 'md',
  variant: 'filled',
  color: 'primary',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    size,
    variant,
    color,
    fullWidth,
    disabled,
    icon,
    loading,
    className,
    children,
    loaderProps,
    innerProps,
    ...others
  } = applayComponentDefaultProps(defaultProps, props);

  return (
    <button
      ref={ref}
      disabled={disabled || loading}
      className={twMerge(buttonStyles({ size, variant, color, fullWidth }), className)}
      {...others}
    >
      {loading && <ButtonLoader {...loaderProps} />}
      <ButtonInner loading={loading} {...innerProps}>
        {icon && icon} {children}
      </ButtonInner>
    </button>
  );
});

Button.displayName = 'Button';
