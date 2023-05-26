'use client';
import type { SegmentedSwitchProps } from './segmented-switch.types';
import { forwardRef, useState } from 'react';
import { Root as SwitchRoot } from '@radix-ui/react-switch';
import { twMerge } from 'tailwind-merge';
import { applayComponentDefaultProps } from '@/utils';
import { SegmentedSwitchLabelsWrapper } from './segmented-switch-labels-wrapper';
import { SegmentedSwitchIndicator } from './segmented-switch-indicator';
import { SegmentedSwitchLabel } from './segmented-switch-label';
import { segmentedSwitchStyles } from './segmented-switch.styles';

const defaultProps: Partial<SegmentedSwitchProps> = {
  size: 'md',
  value: 'on',
  uncheckedLabel: 'No',
  checkedLabel: 'Yes',
  inverted: false,
  disabled: false,
  required: false,
};

export const SegmentedSwitch = forwardRef<HTMLButtonElement, SegmentedSwitchProps>((props, ref) => {
  const {
    defaultChecked,
    checked,
    size,
    inverted,
    uncheckedLabel,
    checkedLabel,
    className,
    labelsWrapperProps,
    labelProps,
    indicatorProps,
    onCheckedChange,
    ...others
  } = applayComponentDefaultProps(defaultProps, props);

  const [_checked, setChecked] = useState(checked ?? defaultChecked);

  const labels = [
    <SegmentedSwitchLabel key="Unchecked Label" checked={_checked === false} {...labelProps}>
      {uncheckedLabel}
    </SegmentedSwitchLabel>,
    <SegmentedSwitchLabel key="Checked Label" checked={_checked === true} {...labelProps}>
      {checkedLabel}
    </SegmentedSwitchLabel>,
  ];

  function handleCheckedChange(checked: boolean) {
    setChecked(checked);

    if (onCheckedChange) {
      onCheckedChange(checked);
    }
  }

  return (
    <SwitchRoot
      ref={ref}
      checked={checked}
      defaultChecked={defaultChecked}
      onCheckedChange={handleCheckedChange}
      className={twMerge(segmentedSwitchStyles({ size }), className)}
      {...others}
    >
      <SegmentedSwitchLabelsWrapper {...labelsWrapperProps}>
        <SegmentedSwitchIndicator inverted={inverted} {...indicatorProps} />
        {inverted ? labels.reverse() : labels}
      </SegmentedSwitchLabelsWrapper>
    </SwitchRoot>
  );
});

SegmentedSwitch.displayName = 'SegmentedSwitch';
