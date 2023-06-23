import type { StateCreator } from 'zustand';

export interface ProjectCloneSlice {
  projectCloneId: string | undefined;

  setProjectCloneId: (projectCloneId: string | undefined) => void;
}

export type CreateProjectCloneSlice = StateCreator<ProjectCloneSlice, [], [], ProjectCloneSlice>;
