import type { CSSProperties } from 'react';
import { useStore, selectEditorLineNumbers, selectFontFamily, selectFontSize } from '@/store';
import { getFontFamilyCssVariableById } from '@/utils';

interface SandboxEditorStyle extends CSSProperties {
  '--sandbox-editor-font-family': string;
  '--sandbox-editor-font-size': string;
  '--sandbox-editor-padding-left': string;
  '--sandbox-editor-padding-top': string;
  '--sandbox-editor-padding-bottom': string;
}

export function useSandboxEditorStyle() {
  const editorLineNumbers = useStore(selectEditorLineNumbers);

  const fontFamily = useStore(selectFontFamily);
  const fontSize = useStore(selectFontSize);

  const sandboxEditorStyle: SandboxEditorStyle = {
    '--sandbox-editor-font-family': getFontFamilyCssVariableById(fontFamily),
    '--sandbox-editor-font-size': `${fontSize / 16}rem`,

    '--sandbox-editor-padding-left': editorLineNumbers ? '0.3125rem' : '1.3125rem',
    '--sandbox-editor-padding-top': '1.3125rem',
    '--sandbox-editor-padding-bottom': '1.3125rem',
  };

  return sandboxEditorStyle;
}
