'use client';
import { useMediaQuery } from '@/hooks';
import { Separator, Popover, PopoverTrigger, PopoverContent, PopoverClose } from '@/components';
import { FrameFillControlTrigger } from './frame-fill-control-trigger';
import { FrameFillControlPopoverBody } from './frame-fill-control-popover-body';

export function FrameFillControlPopover() {
  const matches = useMediaQuery('(min-width: 768px)');

  return (
    <Popover>
      <PopoverTrigger>
        <FrameFillControlTrigger />
      </PopoverTrigger>
      <PopoverContent
        side={matches ? 'right' : 'top'}
        align="start"
        sideOffset={matches ? 52 : 10}
        collisionPadding={10}
        className="p-0"
      >
        <div className="flex items-center justify-between px-4 py-2 ">
          <p className="cursor-default text-base font-medium md:text-sm">Frame fill</p>
          <PopoverClose size={matches ? 'sm' : 'md'} variant="subtle" />
        </div>
        <Separator className="mb-4" />
        <FrameFillControlPopoverBody />
      </PopoverContent>
    </Popover>
  );
}
