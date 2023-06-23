import type { CreateProjectsCountSlice } from './projects-count-slice.types';

export const createProjectsCountSlice: CreateProjectsCountSlice = (set) => ({
  projectsCount: undefined,

  setProjectsCount: (projectsCount) => set(() => ({ projectsCount })),
});
