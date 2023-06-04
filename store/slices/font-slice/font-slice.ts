import type { CreateFontSlice } from './font-slice.types';

export const createFontSlice: CreateFontSlice = (set) => ({
  fontFamily: 'fira-code',
  fontSize: 14,

  setFontFamily: (fontFamily) => set(() => ({ fontFamily })),
  setFontSize: (fontSize) => set(() => ({ fontSize })),
});
