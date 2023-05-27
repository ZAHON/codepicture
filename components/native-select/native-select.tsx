import type { NativeSelectProps } from './native-select.types';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { applayComponentDefaultProps } from '@/utils';
import { NativeSelectWrapper } from './native-select-wrapper';
import { NativeSelectRightSectionWrapper } from './native-select-right-section-wrapper';
import { NativeSelectIcon } from './native-select-icon';
import { nativeSelectStyles } from './native-select.styles';

const defaultProps: Partial<NativeSelectProps> = {
  size: 'md',
  disabled: false,
  invalid: false,
  required: false,
};

export const NativeSelect = forwardRef<HTMLSelectElement, NativeSelectProps>((props, ref) => {
  const {
    size,
    placeholder,
    disabled,
    invalid,
    required,
    className,
    children,
    wrapperProps,
    rightSectionWrapperProps,
    iconProps,
    ...others
  } = applayComponentDefaultProps(defaultProps, props);

  const dataSet = {
    'data-disabled': disabled ? '' : undefined,
    'data-invalid': invalid ? '' : undefined,
  };

  return (
    <NativeSelectWrapper {...dataSet} {...wrapperProps}>
      <select
        ref={ref}
        disabled={disabled}
        aria-required={required ? true : undefined}
        aria-invalid={invalid ? true : undefined}
        className={twMerge(nativeSelectStyles({ size }), className)}
        {...dataSet}
        {...others}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {children}
      </select>
      <NativeSelectRightSectionWrapper size={size} {...dataSet} {...rightSectionWrapperProps}>
        <NativeSelectIcon size={size} {...iconProps} />
      </NativeSelectRightSectionWrapper>
    </NativeSelectWrapper>
  );
});

NativeSelect.displayName = 'NativeSelect';
