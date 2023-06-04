import type { StateCreator } from 'zustand';

export type FrameSlice = {
  frameVisible: boolean;

  setFrameVisible: (frameVisible: boolean) => void;
};

export type CreateFrameSlice = StateCreator<FrameSlice, [], [], FrameSlice>;
