import type { SandboxFrameStyle } from '../sandbox-frame.types';
import {
  useProjectPageStore,
  selectFramePaddingHorizontal,
  selectFramePaddingVertical,
  selectFrameVisible,
  selectFrameFill,
  selectFrameOpacity,
} from '@project/store';
import { getFillValueById } from '@/utils';

export function useSandboxFrameStyle() {
  const framePaddingHorizontal = useProjectPageStore(selectFramePaddingHorizontal);
  const framePaddingVertical = useProjectPageStore(selectFramePaddingVertical);
  const frameVisible = useProjectPageStore(selectFrameVisible);
  const frameFill = useProjectPageStore(selectFrameFill);
  const frameOpacity = useProjectPageStore(selectFrameOpacity);

  const sandboxFrameStyle: SandboxFrameStyle = {
    '--sandbox-frame-padding-inline': `${framePaddingHorizontal / 16}rem`,
    '--sandbox-frame-padding-block': `${framePaddingVertical / 16}rem`,
    '--sandbox-frame-fill': getFillValueById(frameFill),
    '--sandbox-frame-opacity': frameVisible ? frameOpacity / 100 : 0,
  };

  return sandboxFrameStyle;
}
