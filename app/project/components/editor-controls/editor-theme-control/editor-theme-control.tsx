'use client';
import { useId } from 'react';
import { useMediaQuery } from '@/hooks';
import {
  useStore,
  selectEditorTheme,
  selectEditorThemeIsLoading,
  selectSetEditorTheme,
} from '@project/store';
import { Label } from '@/components';
import { themes } from '@/data';
import { EditorThemeControlSelect } from './editor-theme-control-select';
import { EditorThemeControlNativeSelect } from './editor-theme-control-native-select';

const themesDarkSorted = themes
  .filter(({ type }) => type === 'dark')
  .sort((a, b) => a.label.toLocaleLowerCase().localeCompare(b.label.toLocaleLowerCase()));

const themesLightSorted = themes
  .filter(({ type }) => type === 'light')
  .sort((a, b) => a.label.toLocaleLowerCase().localeCompare(b.label.toLocaleLowerCase()));

export function EditorThemeControl() {
  const controlId = useId();
  const matches = useMediaQuery('(min-width: 768px)');
  const editorTheme = useStore(selectEditorTheme);
  const editorThemeIsLoading = useStore(selectEditorThemeIsLoading);
  const setEditorTheme = useStore(selectSetEditorTheme);

  return (
    <div className="grid grid-cols-3 items-center pl-2">
      <Label htmlFor={controlId} className="text-sm md:text-xs">
        Theme
      </Label>
      {matches ? (
        <EditorThemeControlSelect
          id={controlId}
          disabled={editorThemeIsLoading}
          themesLightSorted={themesLightSorted}
          themesDarkSorted={themesDarkSorted}
          value={editorTheme}
          onChange={setEditorTheme}
        />
      ) : (
        <EditorThemeControlNativeSelect
          id={controlId}
          disabled={editorThemeIsLoading}
          themesLightSorted={themesLightSorted}
          themesDarkSorted={themesDarkSorted}
          value={editorTheme}
          onChange={setEditorTheme}
        />
      )}
    </div>
  );
}
