import type { CreateWindowSlice } from './window-slice.types';

export const createWindowSlice: CreateWindowSlice = (set) => ({
  windowHeaderVisible: true,
  windowReflection: false,
  windowShadow: 'bottom',

  setWindowHeaderVisible: (windowHeaderVisible) => set(() => ({ windowHeaderVisible })),
  setWindowReflection: (windowReflection) => set(() => ({ windowReflection })),
  setWindowShadow: (windowShadow) => set(() => ({ windowShadow })),
});
