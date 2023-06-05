import type { CreateFrameSlice } from './frame-slice.types';

export const createFrameSlice: CreateFrameSlice = (set) => ({
  frameFill: 'gradient-1',
  frameFillType: 'gradient',
  frameOpacity: 100,
  framePaddingType: '64',
  framePaddingHorizontal: 64,
  framePaddingVertical: 64,
  frameVisible: true,

  setFrameFill: (frameFill) => set(() => ({ frameFill })),
  setFrameFillType: (frameFillType) => set(() => ({ frameFillType })),
  setFrameOpacity: (frameOpacity) => set(() => ({ frameOpacity })),
  setFramePaddingType: (framePaddingType) => {
    function setPadding(type: typeof framePaddingType, value?: number) {
      set(() => ({ framePaddingType: type }));

      if (typeof value === 'number') {
        set(() => ({ framePaddingHorizontal: value, framePaddingVertical: value }));
      }
    }

    switch (framePaddingType) {
      case '0': {
        setPadding('0', 0);
        return;
      }
      case '16': {
        setPadding('16', 16);
        return;
      }
      case '32': {
        setPadding('32', 32);
        return;
      }
      case '64': {
        setPadding('64', 64);
        return;
      }
      case '128': {
        setPadding('128', 128);
        return;
      }
      case 'custom': {
        setPadding('custom');
        return;
      }
      default: {
        throw Error(`Unknown framePaddingType: ${framePaddingType}`);
      }
    }
  },
  setFramePaddingHorizontal: (framePaddingHorizontal) => set(() => ({ framePaddingHorizontal })),
  setFramePaddingVertical: (framePaddingVertical) => set(() => ({ framePaddingVertical })),
  setFrameVisible: (frameVisible) => set(() => ({ frameVisible })),
});
