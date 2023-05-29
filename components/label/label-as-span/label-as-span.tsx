'use client';
import type { LabelAsSpanProps } from './label-as-span.types';
import type { MouseEvent } from 'react';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { applayComponentDefaultProps } from '@/utils';
import { LabelRequiredIndicator } from '../label-required-indicator';
import { labelAsSpanStyles } from './label-as-span.styles';

const defaultProps: Partial<LabelAsSpanProps> = {
  size: 'md',
  requiredIndicator: ' *',
};

export const LabelAsSpan = forwardRef<HTMLSpanElement, LabelAsSpanProps>((props, ref) => {
  const {
    size,
    className,
    children,
    onMouseDown,
    requiredIndicator,
    withRequiredIndicator,
    requiredIndicatorProps,
    ...others
  } = applayComponentDefaultProps(defaultProps, props);

  function handleMouseDown(e: MouseEvent<HTMLLabelElement>) {
    if (onMouseDown) onMouseDown(e);

    // prevent text selection when double clicking label
    if (!e.defaultPrevented && e.detail > 1) e.preventDefault();
  }

  return (
    <span
      ref={ref}
      className={twMerge(labelAsSpanStyles({ size }), className)}
      onMouseDown={handleMouseDown}
      {...others}
    >
      {children}
      {withRequiredIndicator && (
        <LabelRequiredIndicator {...requiredIndicatorProps}>
          {requiredIndicator}
        </LabelRequiredIndicator>
      )}
    </span>
  );
});

LabelAsSpan.displayName = 'LabelAsSpan';
