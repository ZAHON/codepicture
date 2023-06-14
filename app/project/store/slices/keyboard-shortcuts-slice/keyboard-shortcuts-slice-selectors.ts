import type { StoreState } from '../../use-store.types';

export const selectKeyboardShortcutsDialogOpen = (state: StoreState) =>
  state.keyboardShortcutsDialogOpen;

export const selectSetKeyboardShortcutsDialogOpen = (state: StoreState) =>
  state.setKeyboardShortcutsDialogOpen;
