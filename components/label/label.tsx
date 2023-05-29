'use client';
import type { LabelProps } from './label.types';
import type { MouseEvent } from 'react';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { applayComponentDefaultProps } from '@/utils';
import { LabelRequiredIndicator } from './label-required-indicator';
import { labelStyles } from './label.styles';

const defaultProps: Partial<LabelProps> = {
  size: 'md',
  requiredIndicator: ' *',
};

export const Label = forwardRef<HTMLLabelElement, LabelProps>((props, ref) => {
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
    <label
      ref={ref}
      onMouseDown={handleMouseDown}
      className={twMerge(labelStyles({ size }), className)}
      {...others}
    >
      {children}
      {withRequiredIndicator && (
        <LabelRequiredIndicator {...requiredIndicatorProps}>
          {requiredIndicator}
        </LabelRequiredIndicator>
      )}
    </label>
  );
});

Label.displayName = 'Label';
