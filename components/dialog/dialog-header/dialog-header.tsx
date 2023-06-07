'use client';
import type { DialogHeaderProps } from './dialog-header.types';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { dialogHeaderStyles } from './dialog-header.styles';

export const DialogHeader = forwardRef<HTMLDivElement, DialogHeaderProps>((props, ref) => {
  const { className, children, ...others } = props;

  return (
    <div ref={ref} className={twMerge(dialogHeaderStyles(), className)} {...others}>
      {children}
    </div>
  );
});

DialogHeader.displayName = 'DialogHeader';
