'use client';
import type { DialogBodyProps } from './dialog-body.types';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { applayComponentDefaultProps } from '@/utils';
import { dialogBodyStyles } from './dialog-body.styles';

const defaultProps: Partial<DialogBodyProps> = {
  fontSize: 'md',
};

export const DialogBody = forwardRef<HTMLDivElement, DialogBodyProps>((props, ref) => {
  const { fontSize, className, children, ...others } = applayComponentDefaultProps(
    defaultProps,
    props
  );

  return (
    <div ref={ref} className={twMerge(dialogBodyStyles({ fontSize }), className)} {...others}>
      {children}
    </div>
  );
});

DialogBody.displayName = 'DialogBody';
