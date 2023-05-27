import type { SelectHTMLAttributes, ReactNode } from 'react';
import type { NativeSelectWrapperProps } from './native-select-wrapper';
import type { NativeSelectRightSectionWrapperProps } from './native-select-right-section-wrapper';
import type { NativeSelectIconProps } from './native-select-icon';

type HTMLAttributesToOmit = 'size';

export interface NativeSelectProps
  extends Omit<SelectHTMLAttributes<HTMLSelectElement>, HTMLAttributesToOmit> {
  /**
   * The size of the segmented control.
   * @default "md"
   */
  size?: 'sm' | 'md' | 'lg';

  /**
   * The content of the native select - HTML `option` element or HTML `optgroup` element.
   */
  children: ReactNode;

  /**
   * If added, the native select will have placeholder.
   */
  placeholder?: string;

  /**
   * If `true`, the native select will be disabled and have `data-disabled` attribute.
   * @default false
   */
  disabled?: boolean;

  /**
   * If `true`, the native select will be invalid. In this state component will have `data-invalid` attribute and `aria-invalid` attribute set to `true`.
   * @default false
   */
  invalid?: boolean;

  /**
   * If `true`, the native select will be required and have `aria-required` attribute set to `true`.
   * @default false
   */
  required?: boolean;

  /**
   * Properties spread to `NativeSelectWrapper` component.
   */
  wrapperProps?: Omit<NativeSelectWrapperProps, 'children'>;

  /**
   * Properties spread to `NativeSelectRightSectionWrapper` component.
   */
  rightSectionWrapperProps?: Omit<NativeSelectRightSectionWrapperProps, 'size' | 'children'>;

  /**
   * Properties spread to `NativeSelectIcon` component.
   */
  iconProps?: Omit<NativeSelectIconProps, 'size'>;
}
