import type { StateCreator } from 'zustand';
import type { ShadowId } from '@/data';

export type WindowSlice = {
  windowHeaderVisible: boolean;
  windowReflection: boolean;
  windowShadow: ShadowId;
  windowTabContent: string;

  setWindowHeaderVisible: (windowHeaderVisible: boolean) => void;
  setWindowReflection: (windowReflection: boolean) => void;
  setWindowShadow: (windowShadow: ShadowId) => void;
  setWindowTabContent: (windowTabContent: string) => void;
};

export type CreateWindowSlice = StateCreator<WindowSlice, [], [], WindowSlice>;
