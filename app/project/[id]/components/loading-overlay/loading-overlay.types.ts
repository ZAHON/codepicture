import {
  getProjectInfoData,
  getFrameData,
  getWindowData,
  getEditorData,
  getFontData,
} from '../../server-actions/get-project-data/utils';

export interface LoadingOverlayProps {
  projectInfoData: ReturnType<typeof getProjectInfoData>;
  frameData: ReturnType<typeof getFrameData>;
  windowData: ReturnType<typeof getWindowData>;
  editorData: ReturnType<typeof getEditorData>;
  fontData: ReturnType<typeof getFontData>;
}
