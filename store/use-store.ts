import type { State } from './store.types';
import { create } from 'zustand';
import * as slices from './slices';

export const useStore = create<State>()((...a) => ({
  ...slices.createEditorSlice(...a),
  ...slices.createHighlighterSlice(...a),
}));