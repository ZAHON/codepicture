import type { LinkAsButtonProps } from './link-as-button.types';
import { forwardRef } from 'react';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import { applayComponentDefaultProps } from '@/utils';
import { linkAsButtonStyles } from './link-as-button.styles';

const defaultProps: Partial<LinkAsButtonProps> = {
  size: 'md',
  variant: 'filled',
  color: 'primary',
};

export const LinkAsButton = forwardRef<HTMLAnchorElement, LinkAsButtonProps>((props, ref) => {
  const { size, variant, color, fullWidth, icon, className, children, ...others } =
    applayComponentDefaultProps(defaultProps, props);

  return (
    <Link
      ref={ref}
      className={twMerge(linkAsButtonStyles({ size, variant, color, fullWidth }), className)}
      {...others}
    >
      {icon && icon}
      {children}
    </Link>
  );
});

LinkAsButton.displayName = 'LinkAsButton';
