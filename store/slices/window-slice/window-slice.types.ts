import type { StateCreator } from 'zustand';

export type WindowSlice = {
  windowReflection: boolean;

  setWindowReflection: (windowReflection: boolean) => void;
};

export type CreateWindowSlice = StateCreator<WindowSlice, [], [], WindowSlice>;
