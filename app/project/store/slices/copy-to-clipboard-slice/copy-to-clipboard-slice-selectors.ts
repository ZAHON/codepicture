import type { ProjectPageState as State } from '../../use-project-page-store.types';

export const selectCopyToClipboardCopying = (state: State) => state.copyToClipboardCopying;

export const selectCopyToClipboardCopy = (state: State) => state.copyToClipboardCopy;
