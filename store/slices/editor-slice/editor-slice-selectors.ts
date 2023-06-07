import type { State } from '../../store.types';

// editor code
export const selectEditorCode = (state: State) => state.editorCode;
export const selectSetEditorCode = (state: State) => state.setEditorCode;

// editor first line number
export const selectEditorFirstLineNumber = (state: State) => state.editorFirstLineNumber;
export const selectSetEditorFirstLineNumber = (state: State) => state.setEditorFirstLineNumber;

// editor language
export const selectEditorLanguage = (state: State) => state.editorLanguage;
export const selectEditorLanguageIsLoading = (state: State) => state.editorLanguageIsLoading;
export const selectSetEditorLanguage = (state: State) => state.setEditorLanguage;

// editor line numbers
export const selectEditorLineNumbers = (state: State) => state.editorLineNumbers;
export const selectSetEditorLineNumbers = (state: State) => state.setEditorLineNumbers;

// editor theme
export const selectEditorTheme = (state: State) => state.editorTheme;
export const selectEditorThemeIsLoading = (state: State) => state.editorThemeIsLoading;
export const selectSetEditorTheme = (state: State) => state.setEditorTheme;
