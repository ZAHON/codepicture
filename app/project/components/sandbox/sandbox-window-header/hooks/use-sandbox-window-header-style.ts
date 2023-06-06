import type { CSSProperties } from 'react';
import { useStore, selectWindowTabAccent } from '@/store';

interface SandboxWindowHeaderStyle extends CSSProperties {
  '--sandbox-window-header-fill': string;
}

export function useSandboxWindowHeaderStyle() {
  const windowTabAccent = useStore(selectWindowTabAccent);

  const sandboxWindowHeaderStyle: SandboxWindowHeaderStyle = {
    '--sandbox-window-header-fill': windowTabAccent
      ? 'var(--sandbox-window-header-background)'
      : 'var(--sandbox-editor-background)',
  };

  return sandboxWindowHeaderStyle;
}
