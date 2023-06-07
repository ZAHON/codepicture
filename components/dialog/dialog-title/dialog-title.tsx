'use client';
import type { DialogTitleProps } from './dialog-title.types';
import { forwardRef } from 'react';
import { Title } from '@radix-ui/react-dialog';
import { twMerge } from 'tailwind-merge';
import { applayComponentDefaultProps } from '@/utils';
import { dialogTitleStyles } from './dialog-title.styles';

const defaultProps: Partial<DialogTitleProps> = {
  fontSize: 'lg',
};

export const DialogTitle = forwardRef<HTMLHeadingElement, DialogTitleProps>((props, ref) => {
  const { fontSize, className, children, ...others } = applayComponentDefaultProps(
    defaultProps,
    props
  );

  return (
    <Title ref={ref} className={twMerge(dialogTitleStyles({ fontSize }), className)} {...others}>
      {children}
    </Title>
  );
});

DialogTitle.displayName = 'DialogTitle';
