import type { SandboxWindowHeaderStyle } from '../sandbox-window-header.types';
import {
  useProjectPageStore,
  selectWindowTabAccent,
  selectWindowControlsType,
} from '@project/store';

export function useSandboxWindowHeaderStyle() {
  const windowTabAccent = useProjectPageStore(selectWindowTabAccent);
  const windowControlsType = useProjectPageStore(selectWindowControlsType);

  const sandboxWindowHeaderStyle: SandboxWindowHeaderStyle = {
    '--sandbox-window-header-fill': windowTabAccent
      ? 'var(--sandbox-window-header-background)'
      : 'var(--sandbox-editor-background)',
    '--sandbox-window-header-flex-direction':
      windowControlsType === 'windows' ? 'row-reverse' : 'row',
  };

  return sandboxWindowHeaderStyle;
}
