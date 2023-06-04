import type { StateCreator } from 'zustand';
import type { FontId } from '@/data';

export type FontSlice = {
  fontFamily: FontId;
  fontSize: number;

  setFontFamily: (fontId: FontId) => void;
  setFontSize: (fontSize: number) => void;
};

export type CreateFontSlice = StateCreator<FontSlice, [], [], FontSlice>;
