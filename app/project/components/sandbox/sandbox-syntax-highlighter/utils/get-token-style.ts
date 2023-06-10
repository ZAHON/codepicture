import type { CSSProperties } from 'react';
import type { FontStyle } from 'shiki';

type GetTokenStyleArgs = {
  color?: string;
  fontStyle?: FontStyle;
  bolds: boolean;
  italics: boolean;
};

export function getTokenStyle(args: GetTokenStyleArgs) {
  const { color, fontStyle, bolds, italics } = args;

  const fontStyleString = fontStyle?.toString();

  const tokeStyle: CSSProperties = {
    color: color,
    fontStyle: fontStyleString && fontStyleString === '1' && italics ? 'italic' : undefined,
    fontWeight: fontStyleString && fontStyleString === '2' && bolds ? 'bold' : undefined,
    textDecoration: fontStyleString && fontStyleString === '4' ? 'underline' : undefined,
  };

  return tokeStyle;
}
