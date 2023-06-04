import type { CSSProperties } from 'react';
import {
  useStore,
  selectEditorLineNumbers,
  selectFontFamily,
  selectFontSize,
  selectFontLigatures,
  selectLineHeight,
} from '@/store';
import { getFontFamilyCssVariableById } from '@/utils';

interface SandboxEditorStyle extends CSSProperties {
  '--sandbox-editor-font-family': string;
  '--sandbox-editor-font-ligatures': string;
  '--sandbox-editor-font-size': string;
  '--sandbox-editor-line-height': string;
  '--sandbox-editor-padding-left': string;
  '--sandbox-editor-padding-top': string;
  '--sandbox-editor-padding-bottom': string;
}

export function useSandboxEditorStyle() {
  const editorLineNumbers = useStore(selectEditorLineNumbers);

  const fontFamily = useStore(selectFontFamily);
  const fontLigatures = useStore(selectFontLigatures);
  const fontSize = useStore(selectFontSize);
  const lineHeight = useStore(selectLineHeight);

  const sandboxEditorStyle: SandboxEditorStyle = {
    '--sandbox-editor-font-family': getFontFamilyCssVariableById(fontFamily),
    '--sandbox-editor-font-ligatures': fontLigatures ? '"calt", "liga"' : '"calt" 0, "liga" 0',
    '--sandbox-editor-font-size': `${fontSize / 16}rem`,
    '--sandbox-editor-line-height': `${lineHeight}%`,

    '--sandbox-editor-padding-left': editorLineNumbers ? '0.3125rem' : '1.3125rem',
    '--sandbox-editor-padding-top': '1.3125rem',
    '--sandbox-editor-padding-bottom': '1.3125rem',
  };

  return sandboxEditorStyle;
}
