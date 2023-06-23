import type {
  CopyToClipboardSlice,
  ExportImageSlice,
  HighlighterSlice,
  KeyboardShortcutsSlice,
  OpenInNewTabSlice,
  ProjectSlice,
} from './slices';

export type ProjectPageState = CopyToClipboardSlice &
  ExportImageSlice &
  HighlighterSlice &
  KeyboardShortcutsSlice &
  OpenInNewTabSlice &
  ProjectSlice;
