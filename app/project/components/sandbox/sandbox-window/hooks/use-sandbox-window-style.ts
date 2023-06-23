import type { SandboxWindowStyle } from '../sandbox-window.types';
import { useProjectPageStore, selectWindowBorderRadius, selectWindowShadow } from '@project/store';
import { getShadowValueById } from '@/utils';

export function useSandboxWindowStyle() {
  const windowBorderRadius = useProjectPageStore(selectWindowBorderRadius);
  const windowShadow = useProjectPageStore(selectWindowShadow);

  const sandboxWindowStyle: SandboxWindowStyle = {
    '--sandbox-window-border-radius': `${windowBorderRadius / 16}rem`,
    '--sandbox-window-shadow': getShadowValueById(windowShadow),
  };

  return sandboxWindowStyle;
}
