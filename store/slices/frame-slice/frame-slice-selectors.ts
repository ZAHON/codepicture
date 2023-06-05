import type { State } from '../../store.types';

// frame fill
export const selectFrameFill = (state: State) => state.frameFill;
export const selectFrameFillType = (state: State) => state.frameFillType;
export const selectSetFrameFill = (state: State) => state.setFrameFill;
export const selectSetFrameFillType = (state: State) => state.setFrameFillType;

// frame opacity
export const selectFrameOpacity = (state: State) => state.frameOpacity;
export const selectSetFrameOpacity = (state: State) => state.setFrameOpacity;

// frame padding
export const selectFramePaddingType = (state: State) => state.framePaddingType;
export const selectFramePaddingHorizontal = (state: State) => state.framePaddingHorizontal;
export const selectFramePaddingVertical = (state: State) => state.framePaddingVertical;
export const selectSetFramePaddingType = (state: State) => state.setFramePaddingType;
export const selectSetFramePaddingHorizontal = (state: State) => state.setFramePaddingHorizontal;
export const selectSetFramePaddingVertical = (state: State) => state.setFramePaddingVertical;

// frame visible
export const selectFrameVisible = (state: State) => state.frameVisible;
export const selectSetFrameVisible = (state: State) => state.setFrameVisible;
