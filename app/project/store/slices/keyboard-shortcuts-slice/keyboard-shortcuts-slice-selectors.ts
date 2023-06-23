import type { ProjectPageState as State } from '../../use-project-page-store.types';

export const selectKeyboardShortcutsDialogOpen = (state: State) =>
  state.keyboardShortcutsDialogOpen;

export const selectSetKeyboardShortcutsDialogOpen = (state: State) =>
  state.setKeyboardShortcutsDialogOpen;
