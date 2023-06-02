import type { StateCreator } from 'zustand';
import type { Highlighter } from 'shiki';
import type { EditorSlice } from '../editor-slice';

export type HighlighterSlice = {
  highlighter: Highlighter | undefined;
  setHighlighter: () => void;
};

export type CreateHighlighterSlice = StateCreator<
  HighlighterSlice & EditorSlice,
  [],
  [],
  HighlighterSlice
>;
