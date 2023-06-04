import type { CreateFrameSlice } from './frame-slice.types';

export const createFrameSlice: CreateFrameSlice = (set) => ({
  frameVisible: true,

  setFrameVisible: (frameVisible) => set(() => ({ frameVisible })),
});
