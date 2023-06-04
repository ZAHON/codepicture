import type { CreateFontSlice } from './font-slice.types';

export const createFontSlice: CreateFontSlice = (set) => ({
  fontFamily: 'fira-code',
  fontLigatures: true,
  fontSize: 14,
  lineHeight: 133,

  setFontFamily: (fontFamily) => set(() => ({ fontFamily })),
  setFontLigatures: (fontLigatures) => set(() => ({ fontLigatures })),
  setFontSize: (fontSize) => set(() => ({ fontSize })),
  setLineHeight: (lineHeight) => set(() => ({ lineHeight })),
});
