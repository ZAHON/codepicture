import type { CSSProperties } from 'react';
import { useStore, selectFrameVisible, selectFrameOpacity } from '@/store';

interface SandboxFrameStyle extends CSSProperties {
  '--sandbox-frame-padding-inline': string;
  '--sandbox-frame-padding-block': string;
  '--sandbox-frame-fill': string;
  '--sandbox-frame-opacity': number;
}

export function useSandboxFrameStyle() {
  const frameVisible = useStore(selectFrameVisible);
  const frameOpacity = useStore(selectFrameOpacity);

  const sandboxFrameStyle: SandboxFrameStyle = {
    '--sandbox-frame-padding-inline': `${64 / 16}rem`,
    '--sandbox-frame-padding-block': `${64 / 16}rem`,
    '--sandbox-frame-fill':
      'linear-gradient(112deg, #06b7db -63.59%, #ff4dcc -20.3%, #0072f5 70.46%)',
    '--sandbox-frame-opacity': frameVisible ? frameOpacity / 100 : 0,
  };

  return sandboxFrameStyle;
}
