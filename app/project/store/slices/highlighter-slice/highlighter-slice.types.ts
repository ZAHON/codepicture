import type { StateCreator } from 'zustand';
import type { Highlighter } from 'shiki';
import type { ProjectSlice } from '..';

export interface HighlighterSlice {
  highlighter: Highlighter | undefined;
  highlighterError: boolean;
  setHighlighter: () => void;
}

export type CreateHighlighterSlice = StateCreator<
  HighlighterSlice & ProjectSlice,
  [],
  [],
  HighlighterSlice
>;
