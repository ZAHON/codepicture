import type { StateCreator } from 'zustand';

export type FrameSlice = {
  frameOpacity: number;
  frameVisible: boolean;

  setFrameOpacity: (frameOpacity: number) => void;
  setFrameVisible: (frameVisible: boolean) => void;
};

export type CreateFrameSlice = StateCreator<FrameSlice, [], [], FrameSlice>;
