'use server';
import prisma from '@/lib-server/prisma';
import {
  getProjectInfoData,
  getFrameData,
  getWindowData,
  getEditorData,
  getFontData,
} from './utils';

export async function getProjectData(id: string) {
  try {
    if (!id) {
      throw Error('Project id is not provided');
    }

    const projectData = await prisma.project.findUnique({ where: { id: id } });

    if (!projectData) {
      throw Error(`Project with id: ${id} does not exist`);
    }

    const projectInfoData = getProjectInfoData({
      id: projectData.id,
      name: projectData.name,
    });

    const frameData = getFrameData({
      fill: projectData.frameFill,
      fillType: projectData.frameFillType,
      opacity: projectData.frameOpacity,
      paddingType: projectData.framePaddingType,
      paddingHorizontal: projectData.framePaddingHorizontal,
      paddingVertical: projectData.framePaddingVertical,
      visible: projectData.frameVisible,
    });

    const windowData = getWindowData({
      borderRadius: projectData.windowBorderRadius,
      controlsType: projectData.windowControlsType,
      headerVisible: projectData.windowHeaderVisible,
      reflection: projectData.windowReflection,
      shadow: projectData.windowShadow,
      tabAccent: projectData.windowTabAccent,
      tabContent: projectData.windowTabContent,
      tabVisible: projectData.windowTabVisible,
      tabIconVisible: projectData.windowTabIconVisible,
      tabIconSize: projectData.windowTabIconSize,
      watermark: projectData.windowWatermark,
    });

    const editorData = getEditorData({
      code: projectData.editorCode,
      language: projectData.editorLanguage,
      lineNumbers: projectData.editorLineNumbers,
      theme: projectData.editorTheme,
    });

    const fontData = getFontData({
      bolds: projectData.fontBolds,
      family: projectData.fontFamily,
      italics: projectData.fontItalics,
      letterSpacing: projectData.fontLetterSpacing,
      ligatures: projectData.fontLigatures,
      lineHeight: projectData.fontLineHeight,
      size: projectData.fontSize,
    });

    return { projectInfoData, frameData, windowData, editorData, fontData };
  } catch {
    throw Error(`Failed to get project data`);
  }
}
