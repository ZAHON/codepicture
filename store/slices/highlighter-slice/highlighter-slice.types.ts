import type { StateCreator } from 'zustand';
import type { Highlighter } from 'shiki';
import type { EditorSlice } from '../editor-slice';

export type HighlighterSlice = {
  highlighter: Highlighter | undefined;
  highlighterError: boolean;
  setHighlighter: () => void;
};

export type CreateHighlighterSlice = StateCreator<
  HighlighterSlice & EditorSlice,
  [],
  [],
  HighlighterSlice
>;
