import type { StateCreator } from 'zustand';
import type { FontId } from '@/data';

export interface FontSlice {
  fontBolds: boolean;
  fontFamily: FontId;
  fontItalics: boolean;
  fontLetterSpacing: number;
  fontLigatures: boolean;
  fontLineHeight: number;
  fontSize: number;

  setFontBolds: (fontBolds: boolean) => void;
  setFontFamily: (fontId: FontId) => void;
  setFontItalics: (fontItalics: boolean) => void;
  setFontLetterSpacing: (fontLetterSpacing: number) => void;
  setFontLigatures: (fontLigatures: boolean) => void;
  setFontLineHeight: (fontLineHeight: number) => void;
  setFontSize: (fontSize: number) => void;
}

export type CreateFontSlice = StateCreator<FontSlice, [], [], FontSlice>;
