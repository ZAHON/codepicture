import type { CreateProjectCloneSlice } from './project-clone-slice.types';

export const createProjectCloneSlice: CreateProjectCloneSlice = (set) => ({
  projectCloneId: undefined,

  setProjectCloneId: (projectCloneId) => set(() => ({ projectCloneId })),
});
