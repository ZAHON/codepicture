import type { StateCreator } from 'zustand';
import type { ShadowId } from '@/data';

export type WindowSlice = {
  windowReflection: boolean;
  windowShadow: ShadowId;

  setWindowReflection: (windowReflection: boolean) => void;
  setWindowShadow: (windowShadow: ShadowId) => void;
};

export type CreateWindowSlice = StateCreator<WindowSlice, [], [], WindowSlice>;
