import type { StateCreator } from 'zustand';
import type { HighlighterSlice } from '..';
import type { LanguageId, ThemeId } from '@/data';

export interface EditorSlice {
  editorCode: string;
  editorLanguage: LanguageId;
  editorLanguageIsLoading: boolean;
  editorLineNumbers: boolean;
  editorTheme: ThemeId;
  editorThemeIsLoading: boolean;

  setEditorCode: (editorCode: string) => void;
  setEditorLanguage: (editorLanguage: LanguageId) => void;
  setEditorLineNumbers: (editorLineNumbers: boolean) => void;
  setEditorTheme: (editorTheme: ThemeId) => void;
}

export type CreateEditorSlice = StateCreator<EditorSlice & HighlighterSlice, [], [], EditorSlice>;
