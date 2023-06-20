import { create } from 'zustand';
import type { ProjectDelateAlertDialogState } from './project-delate-alert-dialog-store.types';

export const useProjectDelateAlertDialogStore = create<ProjectDelateAlertDialogState>()((set) => ({
  projectId: undefined,
  projectName: undefined,
  alertDialogOpen: false,

  setProjectId: (projectId) => set(() => ({ projectId })),
  setProjectName: (projectName) => set(() => ({ projectName })),
  setAlertDialogOpen: (alertDialogOpen) => set(() => ({ alertDialogOpen })),
}));
