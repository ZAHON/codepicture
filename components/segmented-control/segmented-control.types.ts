import type { HTMLAttributes, ReactNode, CSSProperties } from 'react';
import type { SegmentedControlItemsWrapperProps } from './segmented-control-items-wrapper';
import type { SegmentedControlIndicatorProps } from './segmented-control-indicator';

type HTMLAttributesToOmit = 'dir';

export interface SegmentedControlProps
  extends Omit<HTMLAttributes<HTMLDivElement>, HTMLAttributesToOmit> {
  /**
   * The segmented control items - `SegmentedControlItem` components.
   */
  children: ReactNode;

  /**
   * The size of the segmented control.
   * @default "md"
   */
  size?: 'sm' | 'md' | 'lg';

  /**
   * The value of the segmented control item that should be checked when initially rendered. Use when you do not need to control the state of the segmented control items.
   */
  defaultValue?: string;

  /**
   * The controlled value of the segmented control item to check. Should be used in conjunction with `onValueChange` property.
   */
  value?: string;

  /**
   * Event handler called when the value changes.
   */
  onValueChange?: (value: string) => void;

  /**
   * When `true`, prevents the user from interacting with segmented control items.
   * @default false
   */
  disabled?: boolean;

  /**
   * The name of the group. Submitted with its owning form as part of a name/value pair.
   */
  name?: string;

  /**
   * When `true`, indicates that the user must check a segmented control item before the owning form can be submitted.
   * @default false
   */
  required?: boolean;

  /**
   * When `true`, keyboard navigation will loop from last item to first, and vice versa.
   * @default true
   */
  loop?: boolean;

  /**
   * Properties spread to `SegmentedControlItemsWrapper` component.
   */
  itemsWrapperProps?: Omit<SegmentedControlItemsWrapperProps, 'children'>;

  /**
   * Properties spread to `SegmentedControlIndicator` component.
   */
  indicatorProps?: Omit<SegmentedControlIndicatorProps, 'disabled'>;
}

export interface SegmentedControlStyle extends CSSProperties {
  '--segmented-control-items-count': number;
  '--segmented-control-checked-item-index': number;
}
