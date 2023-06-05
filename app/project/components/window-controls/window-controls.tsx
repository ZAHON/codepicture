import { WindowReflectionControl } from './window-reflection-control';

export function WindowControls() {
  return (
    <div>
      <div className="flex h-12 items-center">
        <span className="cursor-default text-sm font-medium">Window</span>
      </div>
      <div className="flex flex-col gap-y-2 py-2">
        <WindowReflectionControl />
      </div>
    </div>
  );
}
