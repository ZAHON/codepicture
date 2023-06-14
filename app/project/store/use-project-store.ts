import type { ProjectState } from './use-project-store.types';
import { create } from 'zustand';
import * as slices from './slices';

export const useProjectStore = create<ProjectState>()((...a) => ({
  ...slices.createKeyboardShortcutsSlice(...a),
}));
