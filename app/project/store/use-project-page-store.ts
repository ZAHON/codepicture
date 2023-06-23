import type { ProjectPageState } from './use-project-page-store.types';
import { create } from 'zustand';
import * as slices from './slices';

export const useProjectPageStore = create<ProjectPageState>()((...a) => ({
  ...slices.createCopyToClipboardSlice(...a),
  ...slices.createExportImageSlice(...a),
  ...slices.createHighlighterSlice(...a),
  ...slices.createKeyboardShortcutsSlice(...a),
  ...slices.createOpenInNewTabSlice(...a),
  ...slices.createProjectSlice(...a),
}));
