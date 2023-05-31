'use client';
import type { AlertDialogOverlayProps } from './alert-dialog-overlay.types';
import { Overlay } from '@radix-ui/react-alert-dialog';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { alertDialogOverlayStyles } from './alert-dialog-overlay.styles';

export const AlertDialogOverlay = forwardRef<HTMLDivElement, AlertDialogOverlayProps>(
  (props, ref) => {
    const { blur, className, ...others } = props;

    return (
      <Overlay
        ref={ref}
        className={twMerge(alertDialogOverlayStyles({ blur }), className)}
        {...others}
      />
    );
  }
);

AlertDialogOverlay.displayName = 'AlertDialogOverlay';
