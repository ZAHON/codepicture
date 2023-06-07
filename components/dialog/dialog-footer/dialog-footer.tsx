'use client';
import type { DialogFooterProps } from './dialog-footer.types';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { dialogFooterStyles } from './dialog-footer.styles';

export const DialogFooter = forwardRef<HTMLDivElement, DialogFooterProps>((props, ref) => {
  const { className, children, ...others } = props;

  return (
    <div ref={ref} className={twMerge(dialogFooterStyles(), className)} {...others}>
      {children}
    </div>
  );
});

DialogFooter.displayName = 'DialogFooter';
