'use client';
import type { SaveProjectDataArgs } from '../../server-actions';
import { useRef, useEffect, useTransition } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { saveProjectData } from '../../server-actions';
import { useStore, selectProjectId, selectProjectName } from '@project/store';
import { notify } from '@/lib';
import { useFrameState, useWindowState, useEditorState, useFontState } from './hooks';

const notificationId = crypto.randomUUID();

export function SaveProjectData() {
  const didMount = useRef(false);
  const [isPending, startTransition] = useTransition();

  const projectId = useStore(selectProjectId);
  const projectName = useStore(selectProjectName);

  const {
    frameFill,
    frameFillType,
    frameOpacity,
    framePaddingType,
    framePaddingHorizontal,
    framePaddingVertical,
    frameVisible,
  } = useFrameState();

  const {
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
  } = useWindowState();

  const { editorCode, editorLanguage, editorLineNumbers, editorTheme } = useEditorState();

  const {
    fontBolds,
    fontFamily,
    fontItalics,
    fontLetterSpacing,
    fontLigatures,
    fontLineHeight,
    fontSize,
  } = useFontState();

  const debounced = useDebouncedCallback((data: SaveProjectDataArgs) => {
    if (didMount.current) {
      startTransition(() => saveProjectData(data));

      notify.show({
        id: notificationId,
        type: 'loading',
        message: 'Saving project data',
      });
    } else {
      didMount.current = true;
    }
  }, 2000);

  useEffect(() => {
    debounced({
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
    });
  }, [
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
  ]);

  useEffect(() => {
    if (!isPending) {
      notify.dismiss(notificationId);
    }
  }, [isPending]);

  return null;
}
