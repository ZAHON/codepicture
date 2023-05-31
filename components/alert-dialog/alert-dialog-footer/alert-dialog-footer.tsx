'use client';
import type { AlertDialogFooterProps } from './alert-dialog-footer.types';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { alertDialogFooterStyles } from './alert-dialog-footer.styles';

export const AlertDialogFooter = forwardRef<HTMLDivElement, AlertDialogFooterProps>(
  (props, ref) => {
    const { className, children, ...others } = props;

    return (
      <div ref={ref} className={twMerge(alertDialogFooterStyles(), className)} {...others}>
        {children}
      </div>
    );
  }
);

AlertDialogFooter.displayName = 'AlertDialogFooter';
