import type { StoreState } from '../../use-store.types';

// frame fill
export const selectFrameFill = (state: StoreState) => state.frameFill;
export const selectFrameFillType = (state: StoreState) => state.frameFillType;
export const selectSetFrameFill = (state: StoreState) => state.setFrameFill;
export const selectSetFrameFillType = (state: StoreState) => state.setFrameFillType;

// frame opacity
export const selectFrameOpacity = (state: StoreState) => state.frameOpacity;
export const selectSetFrameOpacity = (state: StoreState) => state.setFrameOpacity;

// frame padding
export const selectFramePaddingType = (state: StoreState) => state.framePaddingType;
export const selectFramePaddingHorizontal = (state: StoreState) => state.framePaddingHorizontal;
export const selectFramePaddingVertical = (state: StoreState) => state.framePaddingVertical;
export const selectSetFramePaddingType = (state: StoreState) => state.setFramePaddingType;
export const selectSetFramePaddingHorizontal = (state: StoreState) =>
  state.setFramePaddingHorizontal;
export const selectSetFramePaddingVertical = (state: StoreState) => state.setFramePaddingVertical;

// frame visible
export const selectFrameVisible = (state: StoreState) => state.frameVisible;
export const selectSetFrameVisible = (state: StoreState) => state.setFrameVisible;
