import type {
  CopyToClipboardSlice,
  EditorSlice,
  ExportImageSlice,
  FontSlice,
  FrameSlice,
  HighlighterSlice,
  KeyboardShortcutsSlice,
  OpenInNewTabSlice,
  ProjectSlice,
  WindowSlice,
} from './slices';

export type StoreState = CopyToClipboardSlice &
  EditorSlice &
  ExportImageSlice &
  FontSlice &
  FrameSlice &
  HighlighterSlice &
  KeyboardShortcutsSlice &
  OpenInNewTabSlice &
  ProjectSlice &
  WindowSlice;
