import type { ButtonHTMLAttributes, ReactNode } from 'react';

type HTMLAttributesToOmit = 'placeholder';

export interface SelectProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, HTMLAttributesToOmit> {
  /**
   * The content of the select - `SelectContent` component.
   */
  children: ReactNode;

  /**
   * The size of the select.
   * @default "md"
   */
  size?: 'sm' | 'md' | 'lg';

  /**
   * The value of the select when initially rendered. Use when you do not need to control the state of the select.
   */
  defaultValue?: string;

  /**
   * The controlled value of the select. Should be used in conjunction with `onValueChange` property.
   */
  value?: string;

  /**
   * Event handler called when the value changes.
   */
  onValueChange?: (value: string) => void;

  /**
   * The open state of the select when it is initially rendered. Use when you do not need to control its open state.
   */
  defaultOpen?: boolean;

  /**
   * The controlled open state of the select. Must be used in conjunction with `onOpenChange` property.
   */
  open?: boolean;

  /**
   * Event handler called when the open state of the select changes.
   */
  onOpenChange?: (open: boolean) => void;

  /**
   * The name of the select. Submitted with its owning form as part of a name/value pair.
   */
  name?: string;

  /**
   * When `true`, prevents the user from interacting with select.
   * @default false
   */
  disabled?: boolean;

  /**
   * When `true`, indicates that the user must select a value before the owning form can be submitted.
   * @default false
   */
  required?: boolean;

  /**
   * The content that will be rendered inside the select trigger when no `value` or `defaultValue` is set.
   */
  placeholder?: ReactNode;
}
