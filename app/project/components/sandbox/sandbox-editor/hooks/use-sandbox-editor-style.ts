import type { SandboxEditorStyle } from '../sandbox-editor.types';
import {
  useStore,
  selectEditorLineNumbers,
  selectFontFamily,
  selectFontSize,
  selectFontLigatures,
  selectFontLineHeight,
  selectFontLetterSpacing,
} from '@project/store';
import { getFontFamilyCssVariableById } from '@/utils';

export function useSandboxEditorStyle() {
  const editorLineNumbers = useStore(selectEditorLineNumbers);

  const fontFamily = useStore(selectFontFamily);
  const fontLigatures = useStore(selectFontLigatures);
  const fontSize = useStore(selectFontSize);
  const fontLineHeight = useStore(selectFontLineHeight);
  const fontLetterSpacing = useStore(selectFontLetterSpacing);

  const sandboxEditorStyle: SandboxEditorStyle = {
    '--sandbox-editor-font-family': getFontFamilyCssVariableById(fontFamily),
    '--sandbox-editor-font-ligatures': fontLigatures ? '"calt", "liga"' : '"calt" 0, "liga" 0',
    '--sandbox-editor-font-size': `${fontSize / 16}rem`,
    '--sandbox-editor-line-height': `${fontLineHeight}%`,
    '--sandbox-editor-letter-spacing': `${fontLetterSpacing}em`,

    '--sandbox-editor-padding-left': editorLineNumbers ? '0.3125rem' : '1.3125rem',
    '--sandbox-editor-padding-top': '1.3125rem',
    '--sandbox-editor-padding-bottom': '1.3125rem',
  };

  return sandboxEditorStyle;
}
