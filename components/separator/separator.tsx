import type { SeparatorProps } from './separator.types';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { applayComponentDefaultProps } from '@/utils';
import { SeparatorLabel } from './separator-label';
import { separatorStyles } from './separator.styles';

const defaultProps: Partial<SeparatorProps> = {
  labelFontSize: 'sm',
};

export const Separator = forwardRef<HTMLDivElement, SeparatorProps>((props, ref) => {
  const { label, labelFontSize, labelProps, className, ...others } = applayComponentDefaultProps(
    defaultProps,
    props
  );

  return (
    <div
      ref={ref}
      role={Boolean(label) ? 'none' : 'separator'}
      className={twMerge(separatorStyles(), className)}
      {...others}
    >
      {label && (
        <SeparatorLabel fontSize={labelFontSize} {...labelProps}>
          {label}
        </SeparatorLabel>
      )}
    </div>
  );
});

Separator.displayName = 'Separator';
