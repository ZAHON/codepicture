import type { ColorId, GradientId } from '@/data';
import { colors, gradients } from '@/data';

const fills = [...colors, ...gradients];

export function getFillValueById(fillId: ColorId | GradientId) {
  const fillData = fills.find(({ id }) => id === fillId);

  return fillData ? fillData.value : 'transparent';
}
