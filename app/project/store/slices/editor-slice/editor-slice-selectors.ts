import type { StoreState } from '../../use-store.types';

// editor code
export const selectEditorCode = (state: StoreState) => state.editorCode;
export const selectSetEditorCode = (state: StoreState) => state.setEditorCode;

// editor language
export const selectEditorLanguage = (state: StoreState) => state.editorLanguage;
export const selectEditorLanguageIsLoading = (state: StoreState) => state.editorLanguageIsLoading;
export const selectSetEditorLanguage = (state: StoreState) => state.setEditorLanguage;

// editor line numbers
export const selectEditorLineNumbers = (state: StoreState) => state.editorLineNumbers;
export const selectSetEditorLineNumbers = (state: StoreState) => state.setEditorLineNumbers;

// editor theme
export const selectEditorTheme = (state: StoreState) => state.editorTheme;
export const selectEditorThemeIsLoading = (state: StoreState) => state.editorThemeIsLoading;
export const selectSetEditorTheme = (state: StoreState) => state.setEditorTheme;
