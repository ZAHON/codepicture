import {
  useProjectPageStore,
  selectProjectId,
  selectProjectName,
  selectFrameFill,
  selectFrameFillType,
  selectFrameOpacity,
  selectFramePaddingType,
  selectFramePaddingHorizontal,
  selectFramePaddingVertical,
  selectFrameVisible,
  selectWindowBorderRadius,
  selectWindowControlsType,
  selectWindowHeaderVisible,
  selectWindowReflection,
  selectWindowShadow,
  selectWindowTabAccent,
  selectWindowTabContent,
  selectWindowTabVisible,
  selectWindowTabIconVisible,
  selectWindowTabIconSize,
  selectWindowWatermark,
  selectEditorCode,
  selectEditorLanguage,
  selectEditorLineNumbers,
  selectEditorTheme,
  selectFontBolds,
  selectFontFamily,
  selectFontItalics,
  selectFontLetterSpacing,
  selectFontLigatures,
  selectFontLineHeight,
  selectFontSize,
} from '@project/store';

export function useProjectState() {
  const projectId = useProjectPageStore(selectProjectId);
  const projectName = useProjectPageStore(selectProjectName);

  const frameFill = useProjectPageStore(selectFrameFill);
  const frameFillType = useProjectPageStore(selectFrameFillType);
  const frameOpacity = useProjectPageStore(selectFrameOpacity);
  const framePaddingType = useProjectPageStore(selectFramePaddingType);
  const framePaddingHorizontal = useProjectPageStore(selectFramePaddingHorizontal);
  const framePaddingVertical = useProjectPageStore(selectFramePaddingVertical);
  const frameVisible = useProjectPageStore(selectFrameVisible);

  const windowBorderRadius = useProjectPageStore(selectWindowBorderRadius);
  const windowControlsType = useProjectPageStore(selectWindowControlsType);
  const windowHeaderVisible = useProjectPageStore(selectWindowHeaderVisible);
  const windowReflection = useProjectPageStore(selectWindowReflection);
  const windowShadow = useProjectPageStore(selectWindowShadow);
  const windowTabAccent = useProjectPageStore(selectWindowTabAccent);
  const windowTabContent = useProjectPageStore(selectWindowTabContent);
  const windowTabVisible = useProjectPageStore(selectWindowTabVisible);
  const windowTabIconVisible = useProjectPageStore(selectWindowTabIconVisible);
  const windowTabIconSize = useProjectPageStore(selectWindowTabIconSize);
  const windowWatermark = useProjectPageStore(selectWindowWatermark);

  const editorCode = useProjectPageStore(selectEditorCode);
  const editorLanguage = useProjectPageStore(selectEditorLanguage);
  const editorLineNumbers = useProjectPageStore(selectEditorLineNumbers);
  const editorTheme = useProjectPageStore(selectEditorTheme);

  const fontBolds = useProjectPageStore(selectFontBolds);
  const fontFamily = useProjectPageStore(selectFontFamily);
  const fontItalics = useProjectPageStore(selectFontItalics);
  const fontLetterSpacing = useProjectPageStore(selectFontLetterSpacing);
  const fontLigatures = useProjectPageStore(selectFontLigatures);
  const fontLineHeight = useProjectPageStore(selectFontLineHeight);
  const fontSize = useProjectPageStore(selectFontSize);

  return {
    projectId,
    projectName,
    frameFill,
    frameFillType,
    frameOpacity,
    framePaddingType,
    framePaddingHorizontal,
    framePaddingVertical,
    frameVisible,
    windowBorderRadius,
    windowControlsType,
    windowHeaderVisible,
    windowReflection,
    windowShadow,
    windowTabAccent,
    windowTabContent,
    windowTabVisible,
    windowTabIconVisible,
    windowTabIconSize,
    windowWatermark,
    editorCode,
    editorLanguage,
    editorLineNumbers,
    editorTheme,
    fontBolds,
    fontFamily,
    fontItalics,
    fontLetterSpacing,
    fontLigatures,
    fontLineHeight,
    fontSize,
  };
}
