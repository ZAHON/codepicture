import type { State } from '../../store.types';

// frame visible
export const selectFrameVisible = (state: State) => state.frameVisible;
export const selectSetFrameVisible = (state: State) => state.setFrameVisible;
