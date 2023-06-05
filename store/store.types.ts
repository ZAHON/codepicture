import type { EditorSlice, FontSlice, FrameSlice, HighlighterSlice, WindowSlice } from './slices';

export type State = EditorSlice & FontSlice & FrameSlice & HighlighterSlice & WindowSlice;
