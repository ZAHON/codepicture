import type { CSSProperties } from 'react';
import { useStore, selectWindowShadow } from '@/store';
import { getShadowValueById } from '@/utils';

interface SandboxWindowStyle extends CSSProperties {
  '--sandbox-window-border-radius': string;
  '--sandbox-window-shadow': string;
}

export function useSandboxWindowStyle() {
  const windowShadow = useStore(selectWindowShadow);

  const sandboxWindowStyle: SandboxWindowStyle = {
    '--sandbox-window-border-radius': `${12 / 16}rem`,
    '--sandbox-window-shadow': getShadowValueById(windowShadow),
  };

  return sandboxWindowStyle;
}
