'use client';
import type { DialogContentProps } from './dialog-content.types';
import { forwardRef } from 'react';
import { Content } from '@radix-ui/react-dialog';
import { twMerge } from 'tailwind-merge';
import { applayComponentDefaultProps } from '@/utils';
import { dialogContentStyles } from './dialog-content.styles';

const defaulrProps: Partial<DialogContentProps> = {
  withBorder: true,
};

export const DialogContent = forwardRef<HTMLDivElement, DialogContentProps>((props, ref) => {
  const { withBorder, className, children, ...others } = applayComponentDefaultProps(
    defaulrProps,
    props
  );

  return (
    <Content
      ref={ref}
      aria-describedby={undefined}
      className={twMerge(dialogContentStyles({ withBorder }), className)}
      {...others}
    >
      {children}
    </Content>
  );
});

DialogContent.displayName = 'DialogContent';
