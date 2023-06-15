import type { StoreState } from './use-store.types';
import { create } from 'zustand';
import * as slices from './slices';

export const useStore = create<StoreState>()((...a) => ({
  ...slices.createEditorSlice(...a),
  ...slices.createExportImageSlice(...a),
  ...slices.createFontSlice(...a),
  ...slices.createFrameSlice(...a),
  ...slices.createHighlighterSlice(...a),
  ...slices.createKeyboardShortcutsSlice(...a),
  ...slices.createOpenInNewTabSlice(...a),
  ...slices.createWindowSlice(...a),
}));
