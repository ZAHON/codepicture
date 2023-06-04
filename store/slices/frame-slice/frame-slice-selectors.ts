import type { State } from '../../store.types';

// frame fill
export const selectFrameFill = (state: State) => state.frameFill;
export const selectFrameFillType = (state: State) => state.frameFillType;
export const selectSetFrameFill = (state: State) => state.setFrameFill;
export const selectSetFrameFillType = (state: State) => state.setFrameFillType;

// frame opacity
export const selectFrameOpacity = (state: State) => state.frameOpacity;
export const selectSetFrameOpacity = (state: State) => state.setFrameOpacity;

// frame visible
export const selectFrameVisible = (state: State) => state.frameVisible;
export const selectSetFrameVisible = (state: State) => state.setFrameVisible;
