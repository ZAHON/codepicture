import type { CreateFrameSlice } from './frame-slice.types';

export const createFrameSlice: CreateFrameSlice = (set) => ({
  frameOpacity: 100,
  frameVisible: true,

  setFrameOpacity: (frameOpacity) => set(() => ({ frameOpacity })),
  setFrameVisible: (frameVisible) => set(() => ({ frameVisible })),
});
