import type { IconButtonProps } from './icon-button.types';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { applayComponentDefaultProps } from '@/utils';
import { Loader } from '@/components';
import { iconButtonStyles } from './icon-button.styles';

const defaultProps: Partial<IconButtonProps> = {
  size: 'md',
  variant: 'subtle',
  color: 'neutral',
};

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>((props, ref) => {
  const {
    disabled,
    loading,
    size,
    variant,
    color,
    pill,
    className,
    children,
    loaderProps,
    ...others
  } = applayComponentDefaultProps(defaultProps, props);

  return (
    <button
      ref={ref}
      type="button"
      disabled={disabled || loading}
      className={twMerge(iconButtonStyles({ size, variant, color, pill }), className)}
      {...others}
    >
      {loading ? <Loader size={size} color="currentColor" {...loaderProps} /> : children}
    </button>
  );
});

IconButton.displayName = 'IconButton';
