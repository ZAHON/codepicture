import type { State } from '../../store.types';

// editor code
export const selectEditorCode = (state: State) => state.editorCode;
export const selectSetEditorCode = (state: State) => state.setEditorCode;

// editor language
export const selectEditorLanguage = (state: State) => state.editorLanguage;
export const selectEditorLanguageIsLoading = (state: State) => state.editorLanguageIsLoading;
export const selectSetEditorLanguage = (state: State) => state.setEditorLanguage;

// editor theme
export const selectEditorTheme = (state: State) => state.editorTheme;
export const selectEditorThemeIsLoading = (state: State) => state.editorThemeIsLoading;
export const selectSetEditorTheme = (state: State) => state.setEditorTheme;
