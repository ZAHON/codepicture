'use client';
import { useState } from 'react';
import { IconFrame, IconAppWindow, IconCode, IconTextSize } from '@tabler/icons-react';
import { Popover, PopoverAnchor, PopoverContent, PopoverClose, Separator } from '@/components';
import { BottomMenuButton } from './bottom-menu-button';
import { FrameControls, WindowControls, EditorControls, FontControls } from '..';

type PopoverContent = undefined | 'Frame' | 'Window' | 'Editor' | 'Font';

export function BottomMenuPopover() {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [popoverContent, setPopoverContent] = useState<PopoverContent>(undefined);

  function handleOpenPopover(content: PopoverContent) {
    setPopoverOpen(true);
    setPopoverContent(content);
  }

  return (
    <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
      <PopoverAnchor>
        <div className="flex h-14 border-t border-t-neutral-5 bg-white dark:bg-black md:hidden">
          <BottomMenuButton
            ariaLabel="Open menu with frame controls"
            onClick={() => handleOpenPopover('Frame')}
          >
            <IconFrame size="1.25rem" aria-hidden="true" focusable="false" />
          </BottomMenuButton>
          <BottomMenuButton
            ariaLabel="Open menu with window controls"
            onClick={() => handleOpenPopover('Window')}
          >
            <IconAppWindow size="1.25rem" aria-hidden="true" focusable="false" />
          </BottomMenuButton>
          <BottomMenuButton
            ariaLabel="Open menu with editor controls"
            onClick={() => handleOpenPopover('Editor')}
          >
            <IconCode size="1.25rem" aria-hidden="true" focusable="false" />
          </BottomMenuButton>
          <BottomMenuButton
            ariaLabel="Open menu with font controls"
            onClick={() => handleOpenPopover('Font')}
          >
            <IconTextSize size="1.25rem" aria-hidden="true" focusable="false" />
          </BottomMenuButton>
        </div>
      </PopoverAnchor>
      <PopoverContent
        side="top"
        sideOffset={0}
        withBorder={false}
        onInteractOutside={(e) => e.preventDefault()}
        className="h-[calc(100vh/2)] w-screen rounded-none border-t border-t-neutral-5 p-0 drop-shadow-none"
      >
        <div className="flex items-center justify-between p-4">
          <span className="cursor-default text-lg font-medium">{popoverContent}</span>
          <PopoverClose />
        </div>
        <Separator />
        <div className="scrollable h-[calc(100%-4.25rem)] overflow-y-auto px-4">
          {popoverContent === 'Frame' && <FrameControls />}
          {popoverContent === 'Window' && <WindowControls />}
          {popoverContent === 'Editor' && <EditorControls />}
          {popoverContent === 'Font' && <FontControls />}
        </div>
      </PopoverContent>
    </Popover>
  );
}
