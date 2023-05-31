'use client';
import type { AlertDialogTitleProps } from './alert-dialog-title.types';
import { Title } from '@radix-ui/react-alert-dialog';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { alertDialogTitleStyles } from './alert-dialog-title.styles';

export const AlertDialogTitle = forwardRef<HTMLHeadingElement, AlertDialogTitleProps>(
  (props, ref) => {
    const { className, children, ...others } = props;

    return (
      <Title ref={ref} className={twMerge(alertDialogTitleStyles(), className)} {...others}>
        {children}
      </Title>
    );
  }
);

AlertDialogTitle.displayName = 'AlertDialogTitle';
