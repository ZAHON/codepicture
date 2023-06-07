'use client';
import type { NumberInputProps } from './number-input.types';
import { useId, forwardRef } from 'react';
import { flushSync } from 'react-dom';
import * as numberInput from '@zag-js/number-input';
import { useMachine, normalizeProps } from '@zag-js/react';
import { IconPlus, IconMinus } from '@tabler/icons-react';
import { twMerge } from 'tailwind-merge';
import { applayComponentDefaultProps } from '@/utils';
import { getSpinButtonIconSize } from './utils';
import {
  numberInputWrapperStyles,
  numberInputStyles,
  numberInputSpinButtonStyles,
} from './number-input.styles';

const defaultProps: Partial<NumberInputProps> = {
  size: 'md',
  minFractionDigits: 0,
  maxFractionDigits: 0,
  allowMouseWheel: true,
  clampValueOnBlur: true,
  allowOverflow: false,
};

export const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>((props, ref) => {
  const {
    id,
    size,
    defaultValue,
    value,
    onValueChange,
    min,
    max,
    step,
    minFractionDigits,
    maxFractionDigits,
    allowMouseWheel,
    clampValueOnBlur,
    allowOverflow,
    name,
    invalid,
    disabled,
    className,
    wrapperClassName,
    spinButtonClassName,
    ...others
  } = applayComponentDefaultProps(defaultProps, props);

  const machineId = useId();
  const InputId = useId();
  const [state, send] = useMachine(
    numberInput.machine({
      id: machineId,
      ids: {
        input: id ? id : InputId,
      },
      value: defaultValue ? defaultValue.toString() : undefined,
    }),
    {
      context: {
        min,
        max,
        step,
        minFractionDigits,
        maxFractionDigits,
        allowMouseWheel,
        clampValueOnBlur,
        allowOverflow,
        name,
        invalid,
        disabled,
        value: value ? value.toString() : undefined,
        onChange(details) {
          const valueAsNumber = details.valueAsNumber;

          if (onValueChange) flushSync(() => onValueChange(valueAsNumber));
        },
        onBlur(details) {
          if (onValueChange && min && details.value === '') {
            flushSync(() => onValueChange(min));
          }
        },
      },
    }
  );

  const api = numberInput.connect(state, send, normalizeProps);

  return (
    <div className={twMerge(numberInputWrapperStyles(), wrapperClassName)} {...api.rootProps}>
      <button
        className={twMerge(numberInputSpinButtonStyles({ size }), spinButtonClassName)}
        {...api.decrementTriggerProps}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.code === 'Space') {
            api.decrement();
          }
        }}
      >
        <IconMinus size={getSpinButtonIconSize(size)} aria-hidden="true" focusable="false" />
      </button>
      <input
        ref={ref}
        className={twMerge(numberInputStyles({ size }), className)}
        {...api.inputProps}
        {...others}
      />
      <button
        className={twMerge(numberInputSpinButtonStyles({ size }), spinButtonClassName)}
        {...api.incrementTriggerProps}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.code === 'Space') {
            api.increment();
          }
        }}
      >
        <IconPlus size={getSpinButtonIconSize(size)} aria-hidden="true" focusable="false" />
      </button>
    </div>
  );
});

NumberInput.displayName = 'NumberInput';
