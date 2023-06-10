import type { State } from '../../store.types';

// font family
export const selectFontFamily = (state: State) => state.fontFamily;
export const selectSetFontFamily = (state: State) => state.setFontFamily;

// font ligatures
export const selectFontLigatures = (state: State) => state.fontLigatures;
export const selectSetFontLigatures = (state: State) => state.setFontLigatures;

// font size
export const selectFontSize = (state: State) => state.fontSize;
export const selectSetFontSize = (state: State) => state.setFontSize;

// italics
export const selectItalics = (state: State) => state.italics;
export const selectSetItalics = (state: State) => state.setItalics;

// letter spacing
export const selectLetterSpacing = (state: State) => state.letterSpacing;
export const selectSetLetterSpacing = (state: State) => state.setLetterSpacing;

// line height
export const selectLineHeight = (state: State) => state.lineHeight;
export const selectSetLineHeight = (state: State) => state.setLineHeight;
