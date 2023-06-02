import type { CreateEditorSlice } from './editor-slice.types';
import { editorCodePlaceholder } from './editor-code-placeholder';

export const createEditorSlice: CreateEditorSlice = (set) => ({
  editorCode: editorCodePlaceholder,
  editorLanguage: 'tsx',
  editorLanguageIsLoading: true,
  editorTheme: 'github-dark',
  editorThemeIsLoading: true,

  setEditorCode: (editorCode) => set(() => ({ editorCode })),
});
