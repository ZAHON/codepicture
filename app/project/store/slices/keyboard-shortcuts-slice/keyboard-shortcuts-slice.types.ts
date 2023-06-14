import type { StateCreator } from 'zustand';

export interface KeyboardShortcutsSlice {
  keyboardShortcutsDialogOpen: boolean;
  setKeyboardShortcutsDialogOpen: (keyboardShortcutsDialogOpen: boolean) => void;
}

export type CreateKeyboardShortcutsSlice = StateCreator<
  KeyboardShortcutsSlice,
  [],
  [],
  KeyboardShortcutsSlice
>;
