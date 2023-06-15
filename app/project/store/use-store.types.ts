import type {
  EditorSlice,
  ExportImageSlice,
  FontSlice,
  FrameSlice,
  HighlighterSlice,
  KeyboardShortcutsSlice,
  OpenInNewTabSlice,
  WindowSlice,
} from './slices';

export type StoreState = EditorSlice &
  ExportImageSlice &
  FontSlice &
  FrameSlice &
  HighlighterSlice &
  KeyboardShortcutsSlice &
  OpenInNewTabSlice &
  WindowSlice;
