import type { CreateProjectSlice } from './project-slice.types';
import { languages, themes, fonts } from '@/data';
import { notify, shiki } from '@/lib-client';
import { editorCodePlaceholder } from './editor-code-placeholder';

export const createProjectSlice: CreateProjectSlice = (set, get) => ({
  projectId: crypto.randomUUID(),
  projectName: 'Untitled',

  frameFill: 'gradient-1',
  frameFillType: 'gradient',
  frameOpacity: 100,
  framePaddingType: '64',
  framePaddingHorizontal: 64,
  framePaddingVertical: 64,
  frameVisible: true,

  windowBorderRadius: 12,
  windowControlsType: 'macos-filled-color',
  windowHeaderVisible: true,
  windowReflection: false,
  windowShadow: 'bottom',
  windowTabAccent: true,
  windowTabContent: 'index.tsx',
  windowTabVisible: true,
  windowTabIconVisible: true,
  windowTabIconSize: 20,
  windowWatermark: true,

  editorCode: editorCodePlaceholder,
  editorLanguage: 'tsx',
  editorLanguageIsLoading: true,
  editorLineNumbers: true,
  editorTheme: themes[Math.floor(Math.random() * themes.length)].id,
  editorThemeIsLoading: true,

  fontBolds: true,
  fontFamily: fonts[Math.floor(Math.random() * fonts.length)].id,
  fontItalics: true,
  fontLetterSpacing: 0,
  fontLigatures: true,
  fontLineHeight: 133,
  fontSize: 14,

  setProjectId: (projectId) => set(() => ({ projectId })),
  setProjectName: (projectName) => set(() => ({ projectName })),

  setFrameFill: (frameFill) => set(() => ({ frameFill })),
  setFrameFillType: (frameFillType) => set(() => ({ frameFillType })),
  setFrameOpacity: (frameOpacity) => set(() => ({ frameOpacity })),
  setFramePaddingType: (framePaddingType) => set(() => ({ framePaddingType })),
  setFramePaddingHorizontal: (framePaddingHorizontal) => set(() => ({ framePaddingHorizontal })),
  setFramePaddingVertical: (framePaddingVertical) => set(() => ({ framePaddingVertical })),
  setFrameVisible: (frameVisible) => set(() => ({ frameVisible })),

  setWindowBorderRadius: (windowBorderRadius) => set(() => ({ windowBorderRadius })),
  setWindowControlsType: (windowControlsType) => set(() => ({ windowControlsType })),
  setWindowHeaderVisible: (windowHeaderVisible) => set(() => ({ windowHeaderVisible })),
  setWindowReflection: (windowReflection) => set(() => ({ windowReflection })),
  setWindowShadow: (windowShadow) => set(() => ({ windowShadow })),
  setWindowTabAccent: (windowTabAccent) => set(() => ({ windowTabAccent })),
  setWindowTabContent: (windowTabContent) => set(() => ({ windowTabContent })),
  setWindowTabVisible: (windowTabVisible) => set(() => ({ windowTabVisible })),
  setWindowTabIconVisible: (windowTabIconVisible) => set(() => ({ windowTabIconVisible })),
  setWindowTabIconSize: (windowTabIconSize) => set(() => ({ windowTabIconSize })),
  setWindowWatermark: (windowWatermark) => set(() => ({ windowWatermark })),

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

  setFontBolds: (fontBolds) => set(() => ({ fontBolds })),
  setFontFamily: (fontFamily) => set(() => ({ fontFamily })),
  setFontItalics: (fontItalics) => set(() => ({ fontItalics })),
  setFontLetterSpacing: (fontLetterSpacing) => set(() => ({ fontLetterSpacing })),
  setFontLigatures: (fontLigatures) => set(() => ({ fontLigatures })),
  setFontLineHeight: (fontLineHeight) => set(() => ({ fontLineHeight })),
  setFontSize: (fontSize) => set(() => ({ fontSize })),
});
