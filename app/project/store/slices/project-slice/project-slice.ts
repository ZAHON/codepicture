import type { CreateProjectSlice } from './project-slice.types';

export const createProjectSlice: CreateProjectSlice = (set) => ({
  projectId: crypto.randomUUID(),
  projectName: 'Untitled',

  setProjectId: (projectId) => set(() => ({ projectId })),
  setProjectName: (projectName) => set(() => ({ projectName })),
});
