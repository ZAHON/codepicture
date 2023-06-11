import { FontFamilyControl } from './font-family-control';
import { FontLigaturesControl } from './font-ligatures-control';
import { FontBoldsControl } from './font-bolds-control';
import { FontItalicsControl } from './font-italics-control';
import { FontSizeControl } from './font-size-control';
import { FontLineHeightControl } from './font-line-height-control';
import { FontLetterSpacingControl } from './font-letter-spacing-control';

export function FontControls() {
  return (
    <div>
      <div className="hidden h-12 items-center md:flex">
        <span className="cursor-default text-sm font-medium">Font</span>
      </div>
      <div className="flex flex-col gap-y-4 py-4 md:gap-y-2 md:py-2">
        <FontFamilyControl />
        <FontLigaturesControl />
        <FontBoldsControl />
        <FontItalicsControl />
        <FontSizeControl />
        <FontLineHeightControl />
        <FontLetterSpacingControl />
      </div>
    </div>
  );
}
