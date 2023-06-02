import type { CSSProperties } from 'react';

interface SandboxFrameStyle extends CSSProperties {
  '--sandbox-frame-padding-inline': string;
  '--sandbox-frame-padding-block': string;
  '--sandbox-frame-fill': string;
  '--sandbox-frame-opacity': number;
}

export function useSandboxFrameStyle() {
  const sandboxFrameStyle: SandboxFrameStyle = {
    '--sandbox-frame-padding-inline': `${64 / 16}rem`,
    '--sandbox-frame-padding-block': `${64 / 16}rem`,
    '--sandbox-frame-fill':
      'linear-gradient(112deg, #06b7db -63.59%, #ff4dcc -20.3%, #0072f5 70.46%)',
    '--sandbox-frame-opacity': 100,
  };

  return sandboxFrameStyle;
}
