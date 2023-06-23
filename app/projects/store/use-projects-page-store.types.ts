import type { ProjectCloneSlice, ProjectDelateSlice, ProjectRenameSlice } from './slices';

export type ProjectsPageState = ProjectCloneSlice & ProjectDelateSlice & ProjectRenameSlice;
