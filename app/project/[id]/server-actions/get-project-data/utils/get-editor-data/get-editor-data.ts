import type { GetEditorDataArgs } from './get-editor-data.types';
import { languages, themes } from '@/data';

export function getEditorData(args: GetEditorDataArgs) {
  const { code, language, lineNumbers, theme } = args;

  const editorCode = code;
  const editorLanguage = languages.find(({ id }) => id === language)?.id;
  const editorLineNumbers = lineNumbers;
  const editorTheme = themes.find(({ id }) => id === theme)?.id;

  if (
    typeof editorCode !== 'string' ||
    !editorLanguage ||
    typeof editorLineNumbers !== 'boolean' ||
    !editorTheme
  ) {
    throw Error('Invalid editor data');
  }

  return {
    editorCode,
    editorLanguage,
    editorLineNumbers,
    editorTheme,
  };
}
