import type { EditorSlice, FontSlice, FrameSlice, HighlighterSlice } from './slices';

export type State = EditorSlice & FontSlice & FrameSlice & HighlighterSlice;
