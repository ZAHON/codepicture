import type { CSSProperties } from 'react';
import { useStore, selectWindowBorderRadius, selectWindowShadow } from '@/store';
import { getShadowValueById } from '@/utils';

interface SandboxWindowStyle extends CSSProperties {
  '--sandbox-window-border-radius': string;
  '--sandbox-window-shadow': string;
}

export function useSandboxWindowStyle() {
  const windowBorderRadius = useStore(selectWindowBorderRadius);
  const windowShadow = useStore(selectWindowShadow);

  const sandboxWindowStyle: SandboxWindowStyle = {
    '--sandbox-window-border-radius': `${windowBorderRadius / 16}rem`,
    '--sandbox-window-shadow': getShadowValueById(windowShadow),
  };

  return sandboxWindowStyle;
}
