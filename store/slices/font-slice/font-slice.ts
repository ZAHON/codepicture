import type { CreateFontSlice } from './font-slice.types';
import { fonts } from '@/data';

export const createFontSlice: CreateFontSlice = (set) => ({
  fontBolds: true,
  fontFamily: fonts[Math.floor(Math.random() * fonts.length)].id,
  fontLigatures: true,
  fontSize: 14,
  italics: true,
  letterSpacing: 0,
  lineHeight: 133,

  setFontBolds: (fontBolds) => set(() => ({ fontBolds })),
  setFontFamily: (fontFamily) => set(() => ({ fontFamily })),
  setFontLigatures: (fontLigatures) => set(() => ({ fontLigatures })),
  setFontSize: (fontSize) => set(() => ({ fontSize })),
  setItalics: (italics) => set(() => ({ italics })),
  setLetterSpacing: (letterSpacing) => set(() => ({ letterSpacing })),
  setLineHeight: (lineHeight) => set(() => ({ lineHeight })),
});
