import {
  useStore,
  selectEditorCode,
  selectEditorLanguage,
  selectEditorLineNumbers,
  selectEditorTheme,
} from '@project/store';

export function useEditorState() {
  const editorCode = useStore(selectEditorCode);
  const editorLanguage = useStore(selectEditorLanguage);
  const editorLineNumbers = useStore(selectEditorLineNumbers);
  const editorTheme = useStore(selectEditorTheme);

  return { editorCode, editorLanguage, editorLineNumbers, editorTheme };
}
