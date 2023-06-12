import type {
  EditorSlice,
  ExportImageSlice,
  FontSlice,
  FrameSlice,
  HighlighterSlice,
  WindowSlice,
} from './slices';

export type State = EditorSlice &
  ExportImageSlice &
  FontSlice &
  FrameSlice &
  HighlighterSlice &
  WindowSlice;
