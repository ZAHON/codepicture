import type { State } from '../../store.types';

// frame opacity
export const selectFrameOpacity = (state: State) => state.frameOpacity;
export const selectSetFrameOpacity = (state: State) => state.setFrameOpacity;

// frame visible
export const selectFrameVisible = (state: State) => state.frameVisible;
export const selectSetFrameVisible = (state: State) => state.setFrameVisible;
