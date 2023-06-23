import type { ProjectPageState as State } from '../../use-project-page-store.types';

// highlighter
export const selectHighlighter = (state: State) => state.highlighter;
export const selectSetHighlighter = (state: State) => state.setHighlighter;

// highlighterError
export const selectHighlighterError = (state: State) => state.highlighterError;
