'use client';
import type { AlertDialogHeaderProps } from './alert-dialog-header.types';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { applayComponentDefaultProps } from '@/utils';
import { alertDialogHeaderStyles } from './alert-dialog-header.styles';

const defaultProps: Partial<AlertDialogHeaderProps> = {
  fontSize: 'lg',
};

export const AlertDialogHeader = forwardRef<HTMLDivElement, AlertDialogHeaderProps>(
  (props, ref) => {
    const { fontSize, className, children, ...others } = applayComponentDefaultProps(
      defaultProps,
      props
    );

    return (
      <div
        ref={ref}
        className={twMerge(alertDialogHeaderStyles({ fontSize }), className)}
        {...others}
      >
        {children}
      </div>
    );
  }
);

AlertDialogHeader.displayName = 'AlertDialogHeader';
