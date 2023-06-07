import type { InputHTMLAttributes } from 'react';

type HTMLAttributesToOmit = 'size';

export interface NumberInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, HTMLAttributesToOmit> {
  /**
   * The value of the number input when initially rendered. Use when you do not need to control the state of the number input.
   */
  defaultValue?: number;

  /**
   * The controlled value of the number input. Must be used in conjunction with `onValueChange` property.
   */
  value?: number;

  /**
   * Event handler called when the value changes.
   */
  onValueChange?: (value: number) => void;

  /**
   * The minimum value for the range.
   */
  min?: number;

  /**
   * The maximum value for the range.
   */
  max?: number;

  /**
   * The stepping interval.
   * @default 0
   */
  step?: number;

  /**
   * The minimum number of fraction digits to use. Possible values are from 0 to 20.
   * @default 0
   */
  minFractionDigits?: number;

  /**
   * The maximum number of fraction digits to use. Possible values are from 0 to 20.
   * @default 0
   */
  maxFractionDigits?: number;

  /**
   * Whether to allow mouse wheel to change the value.
   * @default true
   */
  allowMouseWheel?: boolean;

  /**
   * Whether to clamp the value when the input loses focus (blur).
   * @default true
   */
  clampValueOnBlur?: boolean;

  /**
   * Whether to allow the value overflow the min/max range.
   * @default false
   */
  allowOverflow?: boolean;

  /**
   * The name attribute of the number input. Useful for form submission.
   */
  name?: string;

  /**
   * If `true`, the number input will be disabled.
   * @default false
   */
  disabled?: boolean;

  /**
   * If `true`, the number input will be invalid.
   * @default false
   */
  invalid?: boolean;

  /**
   * The size of the number input.
   * @default "md"
   */
  size?: 'sm' | 'md' | 'lg';

  /**
   * Override number input wrapper default styles.
   */
  wrapperClassName?: string;

  /**
   * Override number spin button default styles.
   */
  spinButtonClassName?: string;
}
