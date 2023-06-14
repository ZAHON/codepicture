import type { StoreState } from '../../use-store.types';

// highlighter
export const selectHighlighter = (state: StoreState) => state.highlighter;
export const selectSetHighlighter = (state: StoreState) => state.setHighlighter;

// highlighterError
export const selectHighlighterError = (state: StoreState) => state.highlighterError;
