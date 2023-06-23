import type { StateCreator } from 'zustand';
import type { ColorId, GradientId, ShadowId, LanguageId, ThemeId, FontId } from '@/data';
import type { HighlighterSlice } from '..';

export type FrameFill = ColorId | GradientId;
export type FrameFillType = 'color' | 'gradient';
export type FramePaddingType = '0' | '16' | '32' | '64' | '128' | 'custom';

export type WindowControlsType =
  | 'macos-filled-color'
  | 'macos-filled-gray'
  | 'macos-outline-color'
  | 'macos-outline-gray'
  | 'windows'
  | 'none';

export type WindowTabIconSize = 16 | 20 | 24;

export interface ProjectSlice {
  projectId: string;
  projectName: string;

  frameFill: FrameFill;
  frameFillType: FrameFillType;
  frameOpacity: number;
  framePaddingType: FramePaddingType;
  framePaddingHorizontal: number;
  framePaddingVertical: number;
  frameVisible: boolean;

  windowBorderRadius: number;
  windowControlsType: WindowControlsType;
  windowHeaderVisible: boolean;
  windowReflection: boolean;
  windowShadow: ShadowId;
  windowTabAccent: boolean;
  windowTabContent: string;
  windowTabVisible: boolean;
  windowTabIconVisible: boolean;
  windowTabIconSize: WindowTabIconSize;
  windowWatermark: boolean;

  editorCode: string;
  editorLanguage: LanguageId;
  editorLanguageIsLoading: boolean;
  editorLineNumbers: boolean;
  editorTheme: ThemeId;
  editorThemeIsLoading: boolean;

  fontBolds: boolean;
  fontFamily: FontId;
  fontItalics: boolean;
  fontLetterSpacing: number;
  fontLigatures: boolean;
  fontLineHeight: number;
  fontSize: number;

  setProjectId: (projectId: string) => void;
  setProjectName: (projectName: string) => void;

  setFrameFill: (frameFill: FrameFill) => void;
  setFrameFillType: (frameFillType: FrameFillType) => void;
  setFrameOpacity: (frameOpacity: number) => void;
  setFramePaddingType: (framePaddingType: FramePaddingType) => void;
  setFramePaddingHorizontal: (framePaddingHorizontal: number) => void;
  setFramePaddingVertical: (framePaddingVertical: number) => void;
  setFrameVisible: (frameVisible: boolean) => void;

  setWindowBorderRadius: (windowBorderRadius: number) => void;
  setWindowControlsType: (windowControlsType: WindowControlsType) => void;
  setWindowHeaderVisible: (windowHeaderVisible: boolean) => void;
  setWindowReflection: (windowReflection: boolean) => void;
  setWindowShadow: (windowShadow: ShadowId) => void;
  setWindowTabAccent: (windowTabVisible: boolean) => void;
  setWindowTabContent: (windowTabContent: string) => void;
  setWindowTabVisible: (windowTabVisible: boolean) => void;
  setWindowTabIconVisible: (windowTabIconVisible: boolean) => void;
  setWindowTabIconSize: (windowTabIconSize: WindowTabIconSize) => void;
  setWindowWatermark: (windowWatermark: boolean) => void;

  setEditorCode: (editorCode: string) => void;
  setEditorLanguage: (editorLanguage: LanguageId) => void;
  setEditorLineNumbers: (editorLineNumbers: boolean) => void;
  setEditorTheme: (editorTheme: ThemeId) => void;

  setFontBolds: (fontBolds: boolean) => void;
  setFontFamily: (fontId: FontId) => void;
  setFontItalics: (fontItalics: boolean) => void;
  setFontLetterSpacing: (fontLetterSpacing: number) => void;
  setFontLigatures: (fontLigatures: boolean) => void;
  setFontLineHeight: (fontLineHeight: number) => void;
  setFontSize: (fontSize: number) => void;
}

export type CreateProjectSlice = StateCreator<
  ProjectSlice & HighlighterSlice,
  [],
  [],
  ProjectSlice
>;
