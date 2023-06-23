import type { StateCreator } from 'zustand';

export interface ProjectsCountSlice {
  projectsCount: number | undefined;

  setProjectsCount: (projectsCount: number | undefined) => void;
}

export type CreateProjectsCountSlice = StateCreator<ProjectsCountSlice, [], [], ProjectsCountSlice>;
