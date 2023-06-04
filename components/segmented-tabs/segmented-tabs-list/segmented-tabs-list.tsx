'use client';
import type { SegmentedTabsListProps, SegmentedTabsListStyle } from './segmented-tabs-list.types';
import { forwardRef } from 'react';
import { List } from '@radix-ui/react-tabs';
import { twMerge } from 'tailwind-merge';
import { applayComponentDefaultProps } from '@/utils';
import { getValidChildren } from '@/utils';
import { useSegmentedTabsContext } from '../segmented-tabs-context';
import { SegmentedTabsTriggersWrapper } from '../segmented-tabs-triggers-wrapper';
import { SegmentedTabsIndicator } from '../segmented-tabs-indicator';
import { segmentedTabsListStyles } from './segmented-tabs-list.styles';

const defaultProps: Partial<SegmentedTabsListProps> = {
  size: 'md',
};

export const SegmentedTabsList = forwardRef<HTMLDivElement, SegmentedTabsListProps>(
  (props, ref) => {
    const { size, style, className, children, triggersWrapperProps, indicatorProps, ...others } =
      applayComponentDefaultProps(defaultProps, props);

    const { value } = useSegmentedTabsContext();

    const validChildren = getValidChildren(children);

    const triggersCount = validChildren.length;
    const checkedTriggerIndex = validChildren.findIndex((child) => {
      const { props } = child;

      return props && 'value' in props ? props.value === value : -1;
    });

    const segmentedTabsListStyle: SegmentedTabsListStyle = {
      '--segmented-tabs-triggers-count': triggersCount,
      '--segmented-tabs-checked-trigger-index': checkedTriggerIndex,
      ...style,
    };

    return (
      <List
        ref={ref}
        style={segmentedTabsListStyle}
        className={twMerge(segmentedTabsListStyles({ size }), className)}
        {...others}
      >
        <SegmentedTabsTriggersWrapper {...triggersWrapperProps}>
          <SegmentedTabsIndicator {...indicatorProps} />
          {children}
        </SegmentedTabsTriggersWrapper>
      </List>
    );
  }
);

SegmentedTabsList.displayName = 'SegmentedTabsList';
