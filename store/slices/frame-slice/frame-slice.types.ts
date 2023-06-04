import type { StateCreator } from 'zustand';
import type { ColorId, GradientId } from '@/data';

type FrameFill = ColorId | GradientId;
type FrameFillType = 'color' | 'gradient';

export type FrameSlice = {
  frameFill: FrameFill;
  frameFillType: FrameFillType;
  frameOpacity: number;
  frameVisible: boolean;

  setFrameFill: (frameFill: FrameFill) => void;
  setFrameFillType: (frameFillType: FrameFillType) => void;
  setFrameOpacity: (frameOpacity: number) => void;
  setFrameVisible: (frameVisible: boolean) => void;
};

export type CreateFrameSlice = StateCreator<FrameSlice, [], [], FrameSlice>;
