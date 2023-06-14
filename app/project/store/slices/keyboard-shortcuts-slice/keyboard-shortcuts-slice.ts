import type { CreateKeyboardShortcutsSlice } from './keyboard-shortcuts-slice.types';

export const createKeyboardShortcutsSlice: CreateKeyboardShortcutsSlice = (set) => ({
  keyboardShortcutsDialogOpen: false,
  setKeyboardShortcutsDialogOpen: (keyboardShortcutsDialogOpen) => {
    set(() => ({ keyboardShortcutsDialogOpen }));
  },
});
