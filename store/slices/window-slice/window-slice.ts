import type { CreateWindowSlice } from './window-slice.types';

export const createWindowSlice: CreateWindowSlice = (set) => ({
  windowReflection: false,

  setWindowReflection: (windowReflection) => set(() => ({ windowReflection })),
});
