import type { StateCreator } from 'zustand';
import type { LanguageId, ThemeId } from '@/data';

export type EditorSlice = {
  editorCode: string;
  editorLanguage: LanguageId;
  editorLanguageIsLoading: boolean;
  editorTheme: ThemeId;
  editorThemeIsLoading: boolean;

  setEditorCode: (editorCode: string) => void;
};

export type CreateEditorSlice = StateCreator<EditorSlice, [], [], EditorSlice>;
