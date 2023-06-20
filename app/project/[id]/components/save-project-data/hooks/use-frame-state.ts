import {
  useStore,
  selectFrameFill,
  selectFrameFillType,
  selectFrameOpacity,
  selectFramePaddingType,
  selectFramePaddingHorizontal,
  selectFramePaddingVertical,
  selectFrameVisible,
} from '@project/store';

export function useFrameState() {
  const frameFill = useStore(selectFrameFill);
  const frameFillType = useStore(selectFrameFillType);
  const frameOpacity = useStore(selectFrameOpacity);
  const framePaddingType = useStore(selectFramePaddingType);
  const framePaddingHorizontal = useStore(selectFramePaddingHorizontal);
  const framePaddingVertical = useStore(selectFramePaddingVertical);
  const frameVisible = useStore(selectFrameVisible);

  return {
    frameFill,
    frameFillType,
    frameOpacity,
    framePaddingType,
    framePaddingHorizontal,
    framePaddingVertical,
    frameVisible,
  };
}
