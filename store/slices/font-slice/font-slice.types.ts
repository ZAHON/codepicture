import type { StateCreator } from 'zustand';
import type { FontId } from '@/data';

export type FontSlice = {
  fontBolds: boolean;
  fontFamily: FontId;
  fontLigatures: boolean;
  fontSize: number;
  italics: boolean;
  letterSpacing: number;
  lineHeight: number;

  setFontBolds: (fontBolds: boolean) => void;
  setFontFamily: (fontId: FontId) => void;
  setFontLigatures: (fontLigatures: boolean) => void;
  setFontSize: (fontSize: number) => void;
  setItalics: (italics: boolean) => void;
  setLetterSpacing: (letterSpacing: number) => void;
  setLineHeight: (lineHeight: number) => void;
};

export type CreateFontSlice = StateCreator<FontSlice, [], [], FontSlice>;
