import type { StoreState } from '../../use-store.types';

// font bolds
export const selectFontBolds = (state: StoreState) => state.fontBolds;
export const selectSetFontBolds = (state: StoreState) => state.setFontBolds;

// font family
export const selectFontFamily = (state: StoreState) => state.fontFamily;
export const selectSetFontFamily = (state: StoreState) => state.setFontFamily;

// font italics
export const selectFontItalics = (state: StoreState) => state.fontItalics;
export const selectSetFontItalics = (state: StoreState) => state.setFontItalics;

// font letter spacing
export const selectFontLetterSpacing = (state: StoreState) => state.fontLetterSpacing;
export const selectSetFontLetterSpacing = (state: StoreState) => state.setFontLetterSpacing;

// font ligatures
export const selectFontLigatures = (state: StoreState) => state.fontLigatures;
export const selectSetFontLigatures = (state: StoreState) => state.setFontLigatures;

// font line height
export const selectFontLineHeight = (state: StoreState) => state.fontLineHeight;
export const selectSetFontLineHeight = (state: StoreState) => state.setFontLineHeight;

// font size
export const selectFontSize = (state: StoreState) => state.fontSize;
export const selectSetFontSize = (state: StoreState) => state.setFontSize;
