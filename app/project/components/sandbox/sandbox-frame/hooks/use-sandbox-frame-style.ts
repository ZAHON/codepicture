import type { CSSProperties } from 'react';
import {
  useStore,
  selectFramePaddingHorizontal,
  selectFramePaddingVertical,
  selectFrameVisible,
  selectFrameFill,
  selectFrameOpacity,
} from '@/store';
import { getFillValueById } from '@/utils';

interface SandboxFrameStyle extends CSSProperties {
  '--sandbox-frame-padding-inline': string;
  '--sandbox-frame-padding-block': string;
  '--sandbox-frame-fill': string;
  '--sandbox-frame-opacity': number;
}

export function useSandboxFrameStyle() {
  const framePaddingHorizontal = useStore(selectFramePaddingHorizontal);
  const framePaddingVertical = useStore(selectFramePaddingVertical);
  const frameVisible = useStore(selectFrameVisible);
  const frameFill = useStore(selectFrameFill);
  const frameOpacity = useStore(selectFrameOpacity);

  const sandboxFrameStyle: SandboxFrameStyle = {
    '--sandbox-frame-padding-inline': `${framePaddingHorizontal / 16}rem`,
    '--sandbox-frame-padding-block': `${framePaddingVertical / 16}rem`,
    '--sandbox-frame-fill': getFillValueById(frameFill),
    '--sandbox-frame-opacity': frameVisible ? frameOpacity / 100 : 0,
  };

  return sandboxFrameStyle;
}
