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
