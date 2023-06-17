import type { StateCreator } from 'zustand';
import type { ShadowId } from '@/data';

export type WindowControlsType =
  | 'macos-filled-color'
  | 'macos-filled-gray'
  | 'macos-outline-color'
  | 'macos-outline-gray'
  | 'windows'
  | 'none';

type WindowTabIconSize = 16 | 20 | 24;

export interface WindowSlice {
  windowBorderRadius: number;
  windowControlsType: WindowControlsType;
  windowHeaderVisible: boolean;
  windowReflection: boolean;
  windowShadow: ShadowId;
  windowTabAccent: boolean;
  windowTabContent: string;
  windowTabVisible: boolean;
  windowTabIconVisible: boolean;
  windowTabIconSize: WindowTabIconSize;
  windowWatermark: boolean;

  setWindowBorderRadius: (windowBorderRadius: number) => void;
  setWindowControlsType: (windowControlsType: WindowControlsType) => void;
  setWindowHeaderVisible: (windowHeaderVisible: boolean) => void;
  setWindowReflection: (windowReflection: boolean) => void;
  setWindowShadow: (windowShadow: ShadowId) => void;
  setWindowTabAccent: (windowTabVisible: boolean) => void;
  setWindowTabContent: (windowTabContent: string) => void;
  setWindowTabVisible: (windowTabVisible: boolean) => void;
  setWindowTabIconVisible: (windowTabIconVisible: boolean) => void;
  setWindowTabIconSize: (windowTabIconSize: WindowTabIconSize) => void;
  setWindowWatermark: (windowWatermark: boolean) => void;
}

export type CreateWindowSlice = StateCreator<WindowSlice, [], [], WindowSlice>;
