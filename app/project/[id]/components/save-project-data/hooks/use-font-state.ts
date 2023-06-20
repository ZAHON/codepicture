import {
  useStore,
  selectFontBolds,
  selectFontFamily,
  selectFontItalics,
  selectFontLetterSpacing,
  selectFontLigatures,
  selectFontLineHeight,
  selectFontSize,
} from '@project/store';

export function useFontState() {
  const fontBolds = useStore(selectFontBolds);
  const fontFamily = useStore(selectFontFamily);
  const fontItalics = useStore(selectFontItalics);
  const fontLetterSpacing = useStore(selectFontLetterSpacing);
  const fontLigatures = useStore(selectFontLigatures);
  const fontLineHeight = useStore(selectFontLineHeight);
  const fontSize = useStore(selectFontSize);

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
