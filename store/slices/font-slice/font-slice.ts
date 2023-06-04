import type { CreateFontSlice } from './font-slice.types';

export const createFontSlice: CreateFontSlice = (set) => ({
  fontFamily: 'fira-code',

  setFontFamily: (fontFamily) => set(() => ({ fontFamily })),
});
