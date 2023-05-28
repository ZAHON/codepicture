import type { ButtonHTMLAttributes, ReactNode } from 'react';
import type { SegmentedSwitchLabelsWrapperProps } from './segmented-switch-labels-wrapper';
import type { SegmentedSwitchLabelProps } from './segmented-switch-label';
import type { SegmentedSwitchIndicatorProps } from './segmented-switch-indicator';

type HTMLAttributesToOmit = 'children';

export interface SegmentedSwitchProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, HTMLAttributesToOmit> {
  /**
   * The size of the segmented switch.
   * @default "md"
   */
  size?: 'sm' | 'md' | 'lg';

  /**
   * Whether the segmented switch is visually inverted.
   * @default false
   */
  inverted?: boolean;

  /**
   * The content of the unchecked label.
   * @default "No"
   */
  uncheckedLabel?: ReactNode;

  /**
   * The content of the checked label.
   * @default "Yes"
   */
  checkedLabel?: ReactNode;

  /**
   * If added, the unchecked label will show icon before the labels's content.
   */
  uncheckedIcon?: ReactNode;

  /**
   * If added, the checked label will show icon before the labels's content.
   */
  checkedIcon?: ReactNode;

  /**
   * The state of the segmented switch when it is initially rendered. Use when you do not need to control its state.
   */
  defaultChecked?: boolean;

  /**
   * The controlled state of the segmented switch. Must be used in conjunction with `onCheckedChange` property.
   */
  checked?: boolean;

  /**
   * Event handler called when the state of the segmented switch changes.
   */
  onCheckedChange?: (checked: boolean) => void;

  /**
   * When true, prevents the user from interacting with the segmented switch.
   * @default false
   */
  disabled?: boolean;

  /**
   * When true, indicates that the user must check the segmented switch before the owning form can be submitted.
   * @default false
   */
  required?: boolean;

  /**
   * The name of the segmented switch. Submitted with its owning form as part of a name/value pair.
   */
  name?: string;

  /**
   * The value given as data when submitted with a name.
   * @default "on"
   */
  value?: string;

  /**
   * Properties spread to `SegmentedSwitchLabelsWrapper` component.
   */
  labelsWrapperProps?: Omit<SegmentedSwitchLabelsWrapperProps, 'children'>;

  /**
   * Properties spread to `SegmentedSwitchLabel` component.
   */
  labelProps?: Omit<SegmentedSwitchLabelProps, 'children' | 'checked' | 'icon'>;

  /**
   * Properties spread to `SegmentedSwitchIndicator` component.
   */
  indicatorProps?: Omit<SegmentedSwitchIndicatorProps, 'inverted'>;
}
