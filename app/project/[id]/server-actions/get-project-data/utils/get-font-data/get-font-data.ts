import type { GetFontDataArgs } from './get-font-data.types';
import { fonts } from '@/data';

export function getFontData(args: GetFontDataArgs) {
  const { bolds, family, italics, letterSpacing, ligatures, lineHeight, size } = args;

  const fontBolds = bolds;
  const fontFamily = fonts.find(({ id }) => id === family)?.id;
  const fontItalics = italics;
  const fontLetterSpacing = letterSpacing;
  const fontLigatures = ligatures;
  const fontLineHeight = lineHeight;
  const fontSize = size;

  if (
    typeof fontBolds !== 'boolean' ||
    !fontFamily ||
    typeof fontItalics !== 'boolean' ||
    typeof fontLetterSpacing !== 'number' ||
    typeof fontLigatures !== 'boolean' ||
    typeof fontLineHeight !== 'number' ||
    typeof fontSize !== 'number'
  ) {
    throw Error('Invalid font data');
  }

  return {
    fontBolds,
    fontFamily,
    fontItalics,
    fontLetterSpacing,
    fontLigatures,
    fontLineHeight,
    fontSize,
  };
}
