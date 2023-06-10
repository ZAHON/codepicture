import { FontFamilyControl } from './font-family-control';
import { FontLigaturesControl } from './font-ligatures-control';
import { ItalicsControl } from './italics-control';
import { FontSizeControl } from './font-size-control';
import { LineHeightControl } from './line-height-control';
import { LetterSpacingControl } from './letter-spacing-control';

export function FontControls() {
  return (
    <div>
      <div className="hidden h-12 items-center md:flex">
        <span className="cursor-default text-sm font-medium">Font</span>
      </div>
      <div className="flex flex-col gap-y-4 py-4 md:gap-y-2 md:py-2">
        <FontFamilyControl />
        <FontLigaturesControl />
        <ItalicsControl />
        <FontSizeControl />
        <LineHeightControl />
        <LetterSpacingControl />
      </div>
    </div>
  );
}
