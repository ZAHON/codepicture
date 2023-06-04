import type { StateCreator } from 'zustand';
import type { FontId } from '@/data';

export type FontSlice = {
  fontFamily: FontId;

  setFontFamily: (fontId: FontId) => void;
};

export type CreateFontSlice = StateCreator<FontSlice, [], [], FontSlice>;
