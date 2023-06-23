import type { StateCreator } from 'zustand';
import type { ProjectSlice } from '..';

export interface OpenInNewTabSlice {
  openInNewTabPrePreparingLink: boolean;

  openInNewTabPrePrepareLink: () => void;
}

export type CreateOpenInNewTabSlice = StateCreator<
  OpenInNewTabSlice & ProjectSlice,
  [],
  [],
  OpenInNewTabSlice
>;
