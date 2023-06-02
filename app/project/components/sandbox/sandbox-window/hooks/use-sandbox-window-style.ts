import type { CSSProperties } from 'react';

interface SandboxWindowStyle extends CSSProperties {
  '--sandbox-window-border-radius': string;
}

export function useSandboxWindowStyle() {
  const sandboxWindowStyle: SandboxWindowStyle = {
    '--sandbox-window-border-radius': `${12 / 16}rem`,
  };

  return sandboxWindowStyle;
}
