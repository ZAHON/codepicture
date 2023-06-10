import { EditorLanguageControl } from './editor-language-control';
import { EditorThemeControl } from './editor-theme-control';
import { EditorLineNumbersControl } from './editor-line-numbers-control';

export function EditorControls() {
  return (
    <div>
      <div className="hidden h-12 items-center md:flex">
        <span className="cursor-default text-sm font-medium">Editor</span>
      </div>
      <div className="flex flex-col gap-y-4 py-4 md:gap-y-2 md:py-2">
        <EditorLanguageControl />
        <EditorThemeControl />
        <EditorLineNumbersControl />
      </div>
    </div>
  );
}
