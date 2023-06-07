import type { Theme } from 'shiki';
import type { CreateEditorSlice } from './editor-slice.types';
import { editorCodePlaceholder } from './editor-code-placeholder';
import { LanguageId, languages, themes } from '@/data';
import { notify } from '@/lib';

export const createEditorSlice: CreateEditorSlice = (set, get) => ({
  editorFirstLineNumber: 1,
  editorCode: editorCodePlaceholder,
  editorLanguage: 'tsx',
  editorLanguageIsLoading: true,
  editorLineNumbers: true,
  editorTheme: 'github-dark',
  editorThemeIsLoading: true,

  setEditorCode: (editorCode) => set(() => ({ editorCode })),

  setEditorFirstLineNumber: (editorFirstLineNumber) => set(() => ({ editorFirstLineNumber })),

  setEditorLanguage: async (editorLanguage) => {
    const highlighter = get().highlighter;
    const prevLanguage = get().editorLanguage;

    // Error: Highlighter is not loaded
    if (!highlighter) {
      return;
    }

    set(() => ({ editorLanguage, editorLanguageIsLoading: true }));

    // Info: Language with id: editorLanguage is already loaded
    if (highlighter.getLoadedLanguages().includes(editorLanguage)) {
      set(() => ({ editorLanguageIsLoading: false }));
      return;
    }

    const newLanguageData = languages.find(({ id }) => id === editorLanguage);

    // Error: Language with id: editorLanguage does not exist
    if (!newLanguageData) {
      set(() => ({ editorLanguage: prevLanguage, editorLanguageIsLoading: false }));
      return;
    }

    const languagesToLoad: LanguageId[] = [];

    const getLanguagesToLoad = async (idLanguageToLoad: LanguageId) => {
      const languageData = languages.find(({ id }) => id === idLanguageToLoad);

      if (languageData && highlighter) {
        if (!languagesToLoad.includes(languageData.id)) {
          if (languageData.embeddedLanguages) {
            for (const embeddedLanguage of languageData.embeddedLanguages) {
              if (!languagesToLoad.includes(embeddedLanguage)) {
                getLanguagesToLoad(embeddedLanguage);
              }
            }
          }

          languagesToLoad.push(languageData.id);
        }
      }
    };

    const notifyId = crypto.randomUUID();

    notify.show({
      id: notifyId,
      type: 'loading',
      message: `Loading ${newLanguageData.label} language`,
    });

    try {
      await getLanguagesToLoad(editorLanguage);

      for (const languageToLoad of languagesToLoad) {
        if (!highlighter.getLoadedLanguages().includes(languageToLoad)) {
          await highlighter.loadLanguage(languageToLoad);
        }
      }

      set(() => ({ editorLanguageIsLoading: false }));
      notify.show({
        id: notifyId,
        type: 'success',
        message: `Successed to load ${newLanguageData.label} language`,
      });
    } catch {
      set(() => ({ editorLanguage: prevLanguage, editorLanguageIsLoading: false }));
      notify.show({
        id: notifyId,
        type: 'error',
        message: `Failed to load ${newLanguageData.label} language`,
      });
    }
  },

  setEditorLineNumbers: (editorLineNumbers) => set(() => ({ editorLineNumbers })),

  setEditorTheme: async (editorTheme) => {
    const highlighter = get().highlighter;
    const prevEditorTheme = get().editorTheme;

    // Error: Highlighter is not loaded
    if (!highlighter) {
      return;
    }

    set(() => ({ editorTheme, editorThemeIsLoading: true }));

    // Info: Theme with id: themeId is already loaded
    if (highlighter.getLoadedThemes().includes(editorTheme as Theme)) {
      set(() => ({ editorThemeIsLoading: false }));
      return;
    }

    const newThemeData = themes.find(({ id }) => id === editorTheme);

    // Error: Theme with id: themeId does not exist
    if (!newThemeData) {
      set(() => ({ editorTheme: prevEditorTheme, editorThemeIsLoading: false }));
      return;
    }

    const notifyId = crypto.randomUUID();

    notify.show({
      id: notifyId,
      type: 'loading',
      message: `Loading ${newThemeData.label} theme`,
    });

    try {
      await highlighter.loadTheme(editorTheme);
      set(() => ({ editorThemeIsLoading: false }));
      notify.show({
        id: notifyId,
        type: 'success',
        message: `Successed to load ${newThemeData.label} theme`,
      });
    } catch {
      set(() => ({ editorTheme: prevEditorTheme, editorThemeIsLoading: false }));
      notify.show({
        id: notifyId,
        type: 'error',
        message: `Failed to load ${newThemeData.label} theme`,
      });
    }
  },
});
