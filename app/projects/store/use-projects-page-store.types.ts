import type {
  ProjectCloneSlice,
  ProjectDelateSlice,
  ProjectRenameSlice,
  ProjectsCountSlice,
} from './slices';

export type ProjectsPageState = ProjectCloneSlice &
  ProjectDelateSlice &
  ProjectRenameSlice &
  ProjectsCountSlice;
