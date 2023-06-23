'use client';
import type { SaveProjectDataArgs } from '@project/[id]/server-actions';
import { useRef, useEffect, useTransition } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { saveProjectData } from '@project/[id]/server-actions';
import { notify } from '@/lib-client';
import { useProjectState } from './hooks';

const notificationId = crypto.randomUUID();

export function SaveProjectData() {
  const didMount = useRef(false);
  const [, startTransition] = useTransition();

  const {
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
  } = useProjectState();

  const debounced = useDebouncedCallback((data: SaveProjectDataArgs) => {
    if (didMount.current) {
      notify.show({
        id: notificationId,
        type: 'loading',
        message: 'Saving project data',
      });

      startTransition(async () => {
        await saveProjectData(data);

        notify.show({
          id: notificationId,
          type: 'success',
          message: 'Successfully saved project data',
        });
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
    debounced,
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

  return null;
}
