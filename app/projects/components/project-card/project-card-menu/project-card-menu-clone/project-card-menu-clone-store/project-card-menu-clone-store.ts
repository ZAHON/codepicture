import { create } from 'zustand';
import type { ProjectCardMenuCloneState } from './project-card-menu-clone-store.types';

export const useProjectCardMenuCloneStore = create<ProjectCardMenuCloneState>()((set) => ({
  projectCloneId: undefined,

  setProjectCloneId: (projectCloneId) => set(() => ({ projectCloneId })),
}));
