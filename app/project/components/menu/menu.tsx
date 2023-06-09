import { Separator } from '@/components';
import { FrameControls, WindowControls, EditorControls, FontControls } from '..';

export function Menu() {
  return (
    <div className="scrollable hidden h-full w-[21.25rem] shrink-0 overflow-y-auto border-r border-r-neutral-5 bg-white p-4 dark:bg-black md:block">
      <FrameControls />
      <Separator className="mt-4" />
      <WindowControls />
      <Separator className="mt-4" />
      <EditorControls />
      <Separator className="mt-4" />
      <FontControls />
    </div>
  );
}
