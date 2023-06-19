import type { StateCreator } from 'zustand';

export interface ProjectSlice {
  projectId: string;
  projectName: string;

  setProjectId: (projectId: string) => void;
  setProjectName: (projectName: string) => void;
}

export type CreateProjectSlice = StateCreator<ProjectSlice, [], [], ProjectSlice>;
