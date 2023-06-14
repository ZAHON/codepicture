import type { StateCreator } from 'zustand';
import type { ColorId, GradientId } from '@/data';

type FrameFill = ColorId | GradientId;
type FrameFillType = 'color' | 'gradient';
type FramePaddingType = '0' | '16' | '32' | '64' | '128' | 'custom';

export interface FrameSlice {
  frameFill: FrameFill;
  frameFillType: FrameFillType;
  frameOpacity: number;
  framePaddingType: FramePaddingType;
  framePaddingHorizontal: number;
  framePaddingVertical: number;
  frameVisible: boolean;

  setFrameFill: (frameFill: FrameFill) => void;
  setFrameFillType: (frameFillType: FrameFillType) => void;
  setFrameOpacity: (frameOpacity: number) => void;
  setFramePaddingType: (paddingType: FramePaddingType) => void;
  setFramePaddingHorizontal: (framePaddingHorizontal: number) => void;
  setFramePaddingVertical: (framePaddingVertical: number) => void;
  setFrameVisible: (frameVisible: boolean) => void;
}

export type CreateFrameSlice = StateCreator<FrameSlice, [], [], FrameSlice>;
