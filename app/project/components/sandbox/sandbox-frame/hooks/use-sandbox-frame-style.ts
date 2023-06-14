import type { SandboxFrameStyle } from '../sandbox-frame.types';
import {
  useStore,
  selectFramePaddingHorizontal,
  selectFramePaddingVertical,
  selectFrameVisible,
  selectFrameFill,
  selectFrameOpacity,
} from '@project/store';
import { getFillValueById } from '@/utils';

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
