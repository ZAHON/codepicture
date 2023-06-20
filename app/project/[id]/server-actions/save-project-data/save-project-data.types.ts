import type { LanguageId, ThemeId, ShadowId, FontId } from '@/data';
import type {
  FrameFill,
  FrameFillType,
  FramePaddingType,
  WindowControlsType,
  WindowTabIconSize,
} from '@project/store/slices';

export interface SaveProjectDataArgs {
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
  editorLineNumbers: boolean;
  editorTheme: ThemeId;

  fontBolds: boolean;
  fontFamily: FontId;
  fontItalics: boolean;
  fontLetterSpacing: number;
  fontLigatures: boolean;
  fontLineHeight: number;
  fontSize: number;
}
