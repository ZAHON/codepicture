import type { CreateFrameSlice } from './frame-slice.types';

export const createFrameSlice: CreateFrameSlice = (set) => ({
  frameFill: 'gradient-1',
  frameFillType: 'gradient',
  frameOpacity: 100,
  frameVisible: true,

  setFrameFill: (frameFill) => set(() => ({ frameFill })),
  setFrameFillType: (frameFillType) => set(() => ({ frameFillType })),
  setFrameOpacity: (frameOpacity) => set(() => ({ frameOpacity })),
  setFrameVisible: (frameVisible) => set(() => ({ frameVisible })),
});
