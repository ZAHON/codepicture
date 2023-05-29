'use client';
import type { SelectViewportProps } from './select-viewport.types';
import { useState, useRef, useLayoutEffect } from 'react';
import { Viewport } from '@radix-ui/react-select';
import { twMerge } from 'tailwind-merge';
import { ScrollArea, ScrollAreaViewport, ScrollAreaScrollbar, ScrollAreaThumb } from '@/components';
import { selectViewportStyles } from './select-viewport.styles';

export function SelectViewport(props: SelectViewportProps) {
  const { className, children, ...others } = props;

  const [selectViewportHasScroll, setSelectViewportHasScroll] = useState(false);
  const selectViewportRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (selectViewportRef.current) {
      const selectViewportHeight = selectViewportRef.current.clientHeight;

      if (selectViewportHeight === 256) {
        setSelectViewportHasScroll(true);
      }
    }
  });

  return (
    <ScrollArea type="auto" className="h-full w-full">
      <Viewport
        ref={selectViewportRef}
        asChild
        className={twMerge(
          selectViewportStyles({ withScroll: selectViewportHasScroll }),
          className
        )}
        {...others}
      >
        <ScrollAreaViewport className="h-full w-full">{children}</ScrollAreaViewport>
      </Viewport>
      <ScrollAreaScrollbar orientation="vertical">
        <ScrollAreaThumb />
      </ScrollAreaScrollbar>
    </ScrollArea>
  );
}
