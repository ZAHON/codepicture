import type { StateCreator } from 'zustand';
import type { ShadowId } from '@/data';

export type WindowSlice = {
  windowHeaderVisible: boolean;
  windowReflection: boolean;
  windowShadow: ShadowId;

  setWindowHeaderVisible: (windowHeaderVisible: boolean) => void;
  setWindowReflection: (windowReflection: boolean) => void;
  setWindowShadow: (windowShadow: ShadowId) => void;
};

export type CreateWindowSlice = StateCreator<WindowSlice, [], [], WindowSlice>;
