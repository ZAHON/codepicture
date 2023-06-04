import type { State } from '../../store.types';

// font family
export const selectFontFamily = (state: State) => state.fontFamily;
export const selectSetFontFamily = (state: State) => state.setFontFamily;
