'use client';
import type { SegmentedTabsContentProps } from './segmented-tabs-content.types';
import { forwardRef } from 'react';
import { Content } from '@radix-ui/react-tabs';

export const SegmentedTabsContent = forwardRef<HTMLDivElement, SegmentedTabsContentProps>(
  (props, ref) => {
    const { children, ...others } = props;

    return (
      <Content ref={ref} {...others}>
        {children}
      </Content>
    );
  }
);

SegmentedTabsContent.displayName = 'SegmentedTabsContent';
