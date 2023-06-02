import type { State } from '../../store.types';

// highlighter
export const selectHighlighter = (state: State) => state.highlighter;
export const selectSetHighlighter = (state: State) => state.setHighlighter;
