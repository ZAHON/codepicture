import type { StateCreator } from 'zustand';
import type { ShadowId } from '@/data';

type WindowControlsType =
  | 'macos-filled-color'
  | 'macos-filled-gray'
  | 'macos-outline-color'
  | 'macos-outline-gray'
  | 'windows'
  | 'none';

export type WindowSlice = {
  windowBorderRadius: number;
  windowControlsType: WindowControlsType;
  windowHeaderVisible: boolean;
  windowReflection: boolean;
  windowShadow: ShadowId;
  windowTabAccent: boolean;
  windowTabContent: string;
  windowTabVisible: boolean;

  setWindowBorderRadius: (windowBorderRadius: number) => void;
  setWindowControlsType: (windowControlsType: WindowControlsType) => void;
  setWindowHeaderVisible: (windowHeaderVisible: boolean) => void;
  setWindowReflection: (windowReflection: boolean) => void;
  setWindowShadow: (windowShadow: ShadowId) => void;
  setWindowTabAccent: (windowTabVisible: boolean) => void;
  setWindowTabContent: (windowTabContent: string) => void;
  setWindowTabVisible: (windowTabVisible: boolean) => void;
};

export type CreateWindowSlice = StateCreator<WindowSlice, [], [], WindowSlice>;
