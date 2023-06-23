import type { ProjectPageState as State } from '../../use-project-page-store.types';

// project id
export const selectProjectId = (state: State) => state.projectId;
export const selectSetProjectId = (state: State) => state.setProjectId;

// project name
export const selectProjectName = (state: State) => state.projectName;
export const selectSetProjectName = (state: State) => state.setProjectName;

/**
 * Frame
 */

// frame fill
export const selectFrameFill = (state: State) => state.frameFill;
export const selectFrameFillType = (state: State) => state.frameFillType;
export const selectSetFrameFill = (state: State) => state.setFrameFill;
export const selectSetFrameFillType = (state: State) => state.setFrameFillType;

// frame opacity
export const selectFrameOpacity = (state: State) => state.frameOpacity;
export const selectSetFrameOpacity = (state: State) => state.setFrameOpacity;

// frame padding
export const selectFramePaddingType = (state: State) => state.framePaddingType;
export const selectFramePaddingHorizontal = (state: State) => state.framePaddingHorizontal;
export const selectFramePaddingVertical = (state: State) => state.framePaddingVertical;
export const selectSetFramePaddingType = (state: State) => state.setFramePaddingType;
export const selectSetFramePaddingHorizontal = (state: State) => state.setFramePaddingHorizontal;
export const selectSetFramePaddingVertical = (state: State) => state.setFramePaddingVertical;

// frame visible
export const selectFrameVisible = (state: State) => state.frameVisible;
export const selectSetFrameVisible = (state: State) => state.setFrameVisible;

/**
 * Window
 */

// window border radius
export const selectWindowBorderRadius = (state: State) => state.windowBorderRadius;
export const selectSetWindowBorderRadius = (state: State) => state.setWindowBorderRadius;

// window controls type
export const selectWindowControlsType = (state: State) => state.windowControlsType;
export const selectSetWindowControlsType = (state: State) => state.setWindowControlsType;

// window header visible
export const selectWindowHeaderVisible = (state: State) => state.windowHeaderVisible;
export const selectSetWindowHeaderVisible = (state: State) => state.setWindowHeaderVisible;

// window reflection
export const selectWindowReflection = (state: State) => state.windowReflection;
export const selectSetWindowReflection = (state: State) => state.setWindowReflection;

// window shadow
export const selectWindowShadow = (state: State) => state.windowShadow;
export const selectSetWindowShadow = (state: State) => state.setWindowShadow;

// window tab accent
export const selectWindowTabAccent = (state: State) => state.windowTabAccent;
export const selectSetWindowTabAccent = (state: State) => state.setWindowTabAccent;

// window tab content
export const selectWindowTabContent = (state: State) => state.windowTabContent;
export const selectSetWindowTabContent = (state: State) => state.setWindowTabContent;

// window tab visible
export const selectWindowTabVisible = (state: State) => state.windowTabVisible;
export const selectSetWindowTabVisible = (state: State) => state.setWindowTabVisible;

// window tab icon visible
export const selectWindowTabIconVisible = (state: State) => state.windowTabIconVisible;
export const selectSetWindowTabIconVisible = (state: State) => state.setWindowTabIconVisible;

// window tab icon size
export const selectWindowTabIconSize = (state: State) => state.windowTabIconSize;
export const selectSetWindowTabIconSize = (state: State) => state.setWindowTabIconSize;

// window watermark
export const selectWindowWatermark = (state: State) => state.windowWatermark;
export const selectSetWindowWatermark = (state: State) => state.setWindowWatermark;

/**
 * Editor
 */

// editor code
export const selectEditorCode = (state: State) => state.editorCode;
export const selectSetEditorCode = (state: State) => state.setEditorCode;

// editor language
export const selectEditorLanguage = (state: State) => state.editorLanguage;
export const selectEditorLanguageIsLoading = (state: State) => state.editorLanguageIsLoading;
export const selectSetEditorLanguage = (state: State) => state.setEditorLanguage;

// editor line numbers
export const selectEditorLineNumbers = (state: State) => state.editorLineNumbers;
export const selectSetEditorLineNumbers = (state: State) => state.setEditorLineNumbers;

// editor theme
export const selectEditorTheme = (state: State) => state.editorTheme;
export const selectEditorThemeIsLoading = (state: State) => state.editorThemeIsLoading;
export const selectSetEditorTheme = (state: State) => state.setEditorTheme;

/**
 * Font
 */

// font bolds
export const selectFontBolds = (state: State) => state.fontBolds;
export const selectSetFontBolds = (state: State) => state.setFontBolds;

// font family
export const selectFontFamily = (state: State) => state.fontFamily;
export const selectSetFontFamily = (state: State) => state.setFontFamily;

// font italics
export const selectFontItalics = (state: State) => state.fontItalics;
export const selectSetFontItalics = (state: State) => state.setFontItalics;

// font letter spacing
export const selectFontLetterSpacing = (state: State) => state.fontLetterSpacing;
export const selectSetFontLetterSpacing = (state: State) => state.setFontLetterSpacing;

// font ligatures
export const selectFontLigatures = (state: State) => state.fontLigatures;
export const selectSetFontLigatures = (state: State) => state.setFontLigatures;

// font line height
export const selectFontLineHeight = (state: State) => state.fontLineHeight;
export const selectSetFontLineHeight = (state: State) => state.setFontLineHeight;

// font size
export const selectFontSize = (state: State) => state.fontSize;
export const selectSetFontSize = (state: State) => state.setFontSize;
