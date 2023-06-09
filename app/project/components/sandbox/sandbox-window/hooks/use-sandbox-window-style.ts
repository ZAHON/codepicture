import type { SandboxWindowStyle } from '../sandbox-window.types';
import { useStore, selectWindowBorderRadius, selectWindowShadow } from '@/store';
import { getShadowValueById } from '@/utils';

export function useSandboxWindowStyle() {
  const windowBorderRadius = useStore(selectWindowBorderRadius);
  const windowShadow = useStore(selectWindowShadow);

  const sandboxWindowStyle: SandboxWindowStyle = {
    '--sandbox-window-border-radius': `${windowBorderRadius / 16}rem`,
    '--sandbox-window-shadow': getShadowValueById(windowShadow),
  };

  return sandboxWindowStyle;
}
