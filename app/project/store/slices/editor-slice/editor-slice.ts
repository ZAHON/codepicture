import type { CreateEditorSlice } from './editor-slice.types';
import { editorCodePlaceholder } from './editor-code-placeholder';
import { languages, themes } from '@/data';
import { notify, shiki } from '@/lib-client';

export const createEditorSlice: CreateEditorSlice = (set, get) => ({
  editorCode: editorCodePlaceholder,
  editorLanguage: 'tsx',
  editorLanguageIsLoading: true,
  editorLineNumbers: true,
  editorTheme: themes[Math.floor(Math.random() * themes.length)].id,
  editorThemeIsLoading: true,

  setEditorCode: (editorCode) => set(() => ({ editorCode })),

  setEditorLanguage: async (editorLanguage) => {
    const highlighter = get().highlighter;
    const prevLanguage = get().editorLanguage;

    const newLanguageData = languages.find(({ id }) => id === editorLanguage);

    if (!newLanguageData) {
      return;
    }

    const notificationId = crypto.randomUUID();

    try {
      set(() => ({ editorLanguage: editorLanguage, editorLanguageIsLoading: true }));

      notify.show({
        id: notificationId,
        type: 'loading',
        message: `Loading ${newLanguageData.label} language`,
      });

      await shiki.loadLanguage({ highlighter, language: editorLanguage });
      set(() => ({ editorLanguageIsLoading: false }));

      notify.show({
        id: notificationId,
        type: 'success',
        message: `Successed to load ${newLanguageData.label} language`,
      });
    } catch {
      set(() => ({ editorLanguage: prevLanguage, editorLanguageIsLoading: false }));
      notify.show({
        id: notificationId,
        type: 'error',
        message: `Failed to load ${newLanguageData.label} language`,
      });
    }
  },

  setEditorLineNumbers: (editorLineNumbers) => set(() => ({ editorLineNumbers })),

  setEditorTheme: async (editorTheme) => {
    const highlighter = get().highlighter;
    const prevEditorTheme = get().editorTheme;

    const newThemeData = themes.find(({ id }) => id === editorTheme);

    if (!newThemeData) {
      return;
    }

    const notificationId = crypto.randomUUID();

    try {
      set(() => ({ editorTheme, editorThemeIsLoading: true }));

      notify.show({
        id: notificationId,
        type: 'loading',
        message: `Loading ${newThemeData.label} theme`,
      });

      await shiki.loadTheme({ highlighter, theme: editorTheme });
      set(() => ({ editorThemeIsLoading: false }));

      notify.show({
        id: notificationId,
        type: 'success',
        message: `Successed to load ${newThemeData.label} theme`,
      });
    } catch {
      set(() => ({ editorTheme: prevEditorTheme, editorThemeIsLoading: false }));
      notify.show({
        id: notificationId,
        type: 'error',
        message: `Failed to load ${newThemeData.label} theme`,
      });
    }
  },
});
