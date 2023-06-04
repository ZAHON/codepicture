import type { StateCreator } from 'zustand';
import type { FontId } from '@/data';

export type FontSlice = {
  fontFamily: FontId;
  fontLigatures: boolean;
  fontSize: number;

  setFontFamily: (fontId: FontId) => void;
  setFontLigatures: (fontLigatures: boolean) => void;
  setFontSize: (fontSize: number) => void;
};

export type CreateFontSlice = StateCreator<FontSlice, [], [], FontSlice>;
