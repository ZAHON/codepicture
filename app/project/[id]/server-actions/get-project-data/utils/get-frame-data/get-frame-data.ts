import type { GetFrameDataArgs } from './get-frame-data.types';
import type { FrameFillType, FramePaddingType } from '@project/store/slices';
import { colors, gradients } from '@/data';

const fills = [...colors, ...gradients];
const fillTypes = ['color', 'gradient'];
const paddingTypes = ['0', '16', '32', '64', '128', 'custom'];

export function getFrameData(args: GetFrameDataArgs) {
  const { fill, fillType, opacity, paddingType, paddingHorizontal, paddingVertical, visible } =
    args;

  const frameFill = fills.find(({ id }) => id === fill)?.id;
  const frameFillType = fillTypes.includes(fillType) ? (fillType as FrameFillType) : undefined;
  const frameOpacity = opacity;
  const framePaddingType = paddingTypes.includes(paddingType)
    ? (paddingType as FramePaddingType)
    : undefined;
  const framePaddingHorizontal = paddingHorizontal;
  const framePaddingVertical = paddingVertical;
  const frameVisible = visible;

  if (
    !frameFill ||
    !frameFillType ||
    typeof frameOpacity !== 'number' ||
    !framePaddingType ||
    typeof framePaddingHorizontal !== 'number' ||
    typeof framePaddingVertical !== 'number' ||
    typeof frameVisible !== 'boolean'
  ) {
    throw Error('Invalid frame data');
  }

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
