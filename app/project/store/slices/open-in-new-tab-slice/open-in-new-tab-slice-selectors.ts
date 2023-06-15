import type { StoreState } from '../../use-store.types';

export const selectOpenInNewTabPrePreparingLink = (state: StoreState) =>
  state.openInNewTabPrePreparingLink;

export const selectOpenInNewTabPrePrepareLink = (state: StoreState) =>
  state.openInNewTabPrePrepareLink;
