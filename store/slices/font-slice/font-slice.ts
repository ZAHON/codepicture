import type { CreateFontSlice } from './font-slice.types';
import { fonts } from '@/data';

export const createFontSlice: CreateFontSlice = (set) => ({
  fontBolds: true,
  fontFamily: fonts[Math.floor(Math.random() * fonts.length)].id,
  fontItalics: true,
  fontLetterSpacing: 0,
  fontLigatures: true,
  fontLineHeight: 133,
  fontSize: 14,

  setFontBolds: (fontBolds) => set(() => ({ fontBolds })),
  setFontFamily: (fontFamily) => set(() => ({ fontFamily })),
  setFontItalics: (fontItalics) => set(() => ({ fontItalics })),
  setFontLetterSpacing: (fontLetterSpacing) => set(() => ({ fontLetterSpacing })),
  setFontLigatures: (fontLigatures) => set(() => ({ fontLigatures })),
  setFontLineHeight: (fontLineHeight) => set(() => ({ fontLineHeight })),
  setFontSize: (fontSize) => set(() => ({ fontSize })),
});
