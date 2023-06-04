'use client';
import type { SegmentedTabsProps } from './segmented-tabs.types';
import { forwardRef, useState } from 'react';
import { Root } from '@radix-ui/react-tabs';
import { twMerge } from 'tailwind-merge';
import { SegmentedTabsContextProvider } from './segmented-tabs-context';
import { segmentedTabsStyles } from './segmented-tabs.styles';

export const SegmentedTabs = forwardRef<HTMLDivElement, SegmentedTabsProps>((props, ref) => {
  const { value, defaultValue, className, children, onValueChange, ...others } = props;

  const [_value, setValue] = useState(value ?? defaultValue);

  function handleValueChange(value: string) {
    setValue(value);

    if (onValueChange) {
      onValueChange(value);
    }
  }

  return (
    <Root
      ref={ref}
      value={value}
      defaultValue={defaultValue}
      dir="ltr"
      orientation="horizontal"
      onValueChange={handleValueChange}
      className={twMerge(segmentedTabsStyles(), className)}
      {...others}
    >
      <SegmentedTabsContextProvider value={{ value: _value }}>
        {children}
      </SegmentedTabsContextProvider>
    </Root>
  );
});

SegmentedTabs.displayName = 'SegmentedTabs';
