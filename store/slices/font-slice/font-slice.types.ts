import type { StateCreator } from 'zustand';
import type { FontId } from '@/data';

export type FontSlice = {
  fontFamily: FontId;
  fontLigatures: boolean;
  fontSize: number;
  letterSpacing: number;
  lineHeight: number;

  setFontFamily: (fontId: FontId) => void;
  setFontLigatures: (fontLigatures: boolean) => void;
  setFontSize: (fontSize: number) => void;
  setLetterSpacing: (letterSpacing: number) => void;
  setLineHeight: (lineHeight: number) => void;
};

export type CreateFontSlice = StateCreator<FontSlice, [], [], FontSlice>;
