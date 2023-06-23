import type { ProjectsPageState } from './use-projects-page-store.types';
import { create } from 'zustand';
import * as slices from './slices';

export const useProjectsPageStore = create<ProjectsPageState>()((...a) => ({
  ...slices.createProjectCloneSlice(...a),
  ...slices.createProjectDelateSlice(...a),
  ...slices.createProjectRenameSlice(...a),
  ...slices.createProjectsCountSlice(...a),
}));
