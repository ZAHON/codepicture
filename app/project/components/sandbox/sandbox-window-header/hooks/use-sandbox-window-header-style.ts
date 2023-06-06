import type { CSSProperties } from 'react';
import { useStore, selectWindowTabAccent, selectWindowControlsType } from '@/store';

interface SandboxWindowHeaderStyle extends CSSProperties {
  '--sandbox-window-header-fill': string;
  '--sandbox-window-header-flex-direction': string;
}

export function useSandboxWindowHeaderStyle() {
  const windowTabAccent = useStore(selectWindowTabAccent);
  const windowControlsType = useStore(selectWindowControlsType);

  const sandboxWindowHeaderStyle: SandboxWindowHeaderStyle = {
    '--sandbox-window-header-fill': windowTabAccent
      ? 'var(--sandbox-window-header-background)'
      : 'var(--sandbox-editor-background)',
    '--sandbox-window-header-flex-direction':
      windowControlsType === 'windows' ? 'row-reverse' : 'row',
  };

  return sandboxWindowHeaderStyle;
}
