import type { StateCreator } from 'zustand';
import type { ShadowId } from '@/data';

export type WindowSlice = {
  windowHeaderVisible: boolean;
  windowReflection: boolean;
  windowShadow: ShadowId;
  windowTabAccent: boolean;
  windowTabContent: string;
  windowTabVisible: boolean;

  setWindowHeaderVisible: (windowHeaderVisible: boolean) => void;
  setWindowReflection: (windowReflection: boolean) => void;
  setWindowShadow: (windowShadow: ShadowId) => void;
  setWindowTabAccent: (windowTabVisible: boolean) => void;
  setWindowTabContent: (windowTabContent: string) => void;
  setWindowTabVisible: (windowTabVisible: boolean) => void;
};

export type CreateWindowSlice = StateCreator<WindowSlice, [], [], WindowSlice>;
