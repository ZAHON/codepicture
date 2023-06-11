import type { State } from '../../store.types';

// font bolds
export const selectFontBolds = (state: State) => state.fontBolds;
export const selectSetFontBolds = (state: State) => state.setFontBolds;

// font family
export const selectFontFamily = (state: State) => state.fontFamily;
export const selectSetFontFamily = (state: State) => state.setFontFamily;

// font italics
export const selectFontItalics = (state: State) => state.fontItalics;
export const selectSetFontItalics = (state: State) => state.setFontItalics;

// font letter spacing
export const selectFontLetterSpacing = (state: State) => state.fontLetterSpacing;
export const selectSetFontLetterSpacing = (state: State) => state.setFontLetterSpacing;

// font ligatures
export const selectFontLigatures = (state: State) => state.fontLigatures;
export const selectSetFontLigatures = (state: State) => state.setFontLigatures;

// font line height
export const selectFontLineHeight = (state: State) => state.fontLineHeight;
export const selectSetFontLineHeight = (state: State) => state.setFontLineHeight;

// font size
export const selectFontSize = (state: State) => state.fontSize;
export const selectSetFontSize = (state: State) => state.setFontSize;
