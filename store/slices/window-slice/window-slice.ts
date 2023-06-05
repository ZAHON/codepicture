import type { CreateWindowSlice } from './window-slice.types';

export const createWindowSlice: CreateWindowSlice = (set) => ({
  windowReflection: false,
  windowShadow: 'bottom',

  setWindowReflection: (windowReflection) => set(() => ({ windowReflection })),
  setWindowShadow: (windowShadow) => set(() => ({ windowShadow })),
});
