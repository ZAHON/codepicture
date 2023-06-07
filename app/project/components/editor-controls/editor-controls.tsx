import { EditorLanguageControl } from './editor-language-control';
import { EditorThemeControl } from './editor-theme-control';
import { EditorLineNumbersControl } from './editor-line-numbers-control';
import { EditorFirstLineNumberControl } from './editor-first-line-number-control';

export function EditorControls() {
  return (
    <div>
      <div className="flex h-12 items-center">
        <span className="cursor-default text-sm font-medium">Editor</span>
      </div>
      <div className="flex flex-col gap-y-2 py-2">
        <EditorLanguageControl />
        <EditorThemeControl />
        <EditorLineNumbersControl />
        <EditorFirstLineNumberControl />
      </div>
    </div>
  );
}
