'use client';
import type { AlertDialogContentProps } from './alert-dialog-content.types';
import { Content } from '@radix-ui/react-alert-dialog';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { applayComponentDefaultProps } from '@/utils';
import { alertDialogContentStyles } from './alert-dialog-content.styles';

const defaultProps: Partial<AlertDialogContentProps> = {
  withBorder: true,
};

export const AlertDialogContent = forwardRef<HTMLDivElement, AlertDialogContentProps>(
  (props, ref) => {
    const { withBorder, className, children, ...others } = applayComponentDefaultProps(
      defaultProps,
      props
    );

    return (
      <Content
        ref={ref}
        className={twMerge(alertDialogContentStyles({ withBorder }), className)}
        {...others}
      >
        {children}
      </Content>
    );
  }
);

AlertDialogContent.displayName = 'AlertDialogContent';
