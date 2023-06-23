import type { ProjectPageState as State } from '../../use-project-page-store.types';

export const selectOpenInNewTabPrePreparingLink = (state: State) =>
  state.openInNewTabPrePreparingLink;

export const selectOpenInNewTabPrePrepareLink = (state: State) => state.openInNewTabPrePrepareLink;
