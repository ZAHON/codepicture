'use client';
import type { PopoverAnchorProps } from './popover-anchor.types';
import { forwardRef } from 'react';
import { Anchor } from '@radix-ui/react-popover';

export const PopoverAnchor = forwardRef<HTMLDivElement, PopoverAnchorProps>((props, ref) => {
  const { children, ...others } = props;

  return (
    <Anchor ref={ref} asChild {...others}>
      {children}
    </Anchor>
  );
});

PopoverAnchor.displayName = 'PopoverAnchor';
