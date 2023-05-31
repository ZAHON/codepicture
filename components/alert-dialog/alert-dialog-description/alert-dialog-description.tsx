'use client';
import type { AlertDialogDescriptionProps } from './alert-dialog-description.types';
import { forwardRef } from 'react';
import { Description } from '@radix-ui/react-alert-dialog';

export const AlertDialogDescription = forwardRef<HTMLParagraphElement, AlertDialogDescriptionProps>(
  (props, ref) => {
    const { children, ...others } = props;

    return (
      <Description ref={ref} {...others}>
        {children}
      </Description>
    );
  }
);

AlertDialogDescription.displayName = 'AlertDialogDescription';
