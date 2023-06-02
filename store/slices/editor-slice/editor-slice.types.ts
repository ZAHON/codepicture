import type { StateCreator } from 'zustand';
import type { HighlighterSlice } from '..';
import type { LanguageId, ThemeId } from '@/data';

export type EditorSlice = {
  editorCode: string;
  editorLanguage: LanguageId;
  editorLanguageIsLoading: boolean;
  editorTheme: ThemeId;
  editorThemeIsLoading: boolean;

  setEditorCode: (editorCode: string) => void;
  setEditorLanguage: (editorLanguage: LanguageId) => void;
};

export type CreateEditorSlice = StateCreator<EditorSlice & HighlighterSlice, [], [], EditorSlice>;
