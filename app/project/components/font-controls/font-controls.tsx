import { FontFamilyControl } from './font-family-control';
import { FontLigaturesControl } from './font-ligatures-control';
import { FontSizeControl } from './font-size-control';
import { LineHeightControl } from './line-height-control';

export function FontControls() {
  return (
    <div>
      <div className="flex h-12 items-center">
        <span className="cursor-default text-sm font-medium">Font</span>
      </div>
      <div className="flex flex-col gap-y-2 py-2">
        <FontFamilyControl />
        <FontLigaturesControl />
        <FontSizeControl />
        <LineHeightControl />
      </div>
    </div>
  );
}
