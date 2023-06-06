import type { CreateWindowSlice } from './window-slice.types';

export const createWindowSlice: CreateWindowSlice = (set) => ({
  windowHeaderVisible: true,
  windowReflection: false,
  windowShadow: 'bottom',
  windowTabAccent: true,
  windowTabContent: 'index.tsx',
  windowTabVisible: true,

  setWindowHeaderVisible: (windowHeaderVisible) => set(() => ({ windowHeaderVisible })),
  setWindowReflection: (windowReflection) => set(() => ({ windowReflection })),
  setWindowShadow: (windowShadow) => set(() => ({ windowShadow })),
  setWindowTabAccent: (windowTabAccent) => set(() => ({ windowTabAccent })),
  setWindowTabContent: (windowTabContent) => set(() => ({ windowTabContent })),
  setWindowTabVisible: (windowTabVisible) => set(() => ({ windowTabVisible })),
});
