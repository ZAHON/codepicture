import type { FontId } from '@/data';
import { fonts } from '@/data';

export function getFontFamilyCssVariableById(fontId: FontId) {
  const fontData = fonts.find(({ id }) => id === fontId);

  return fontData ? `var(${fontData.cssVariable})` : 'ui-monospace';
}
