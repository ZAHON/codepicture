'use client';
import { Separator, Popover, PopoverTrigger, PopoverContent, PopoverClose } from '@/components';
import { FrameFillControlTrigger } from './frame-fill-control-trigger';
import { FrameFillControlPopoverBody } from './frame-fill-control-popover-body';

export function FrameFillControlPopover() {
  return (
    <Popover>
      <PopoverTrigger>
        <FrameFillControlTrigger />
      </PopoverTrigger>
      <PopoverContent side="right" align="start" sideOffset={52} className="p-0">
        <div className="flex items-center justify-between px-4 py-2 ">
          <p className="cursor-default text-sm font-medium">Frame fill</p>
          <PopoverClose size="sm" variant="subtle" />
        </div>
        <Separator className="mb-4" />
        <FrameFillControlPopoverBody />
      </PopoverContent>
    </Popover>
  );
}
