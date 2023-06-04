import { FontFamilyControl } from './font-family-control';

export function FontControls() {
  return (
    <div>
      <div className="flex h-12 items-center">
        <span className="cursor-default text-sm font-medium">Font</span>
      </div>
      <div className="flex flex-col gap-y-2 py-2">
        <FontFamilyControl />
      </div>
    </div>
  );
}
