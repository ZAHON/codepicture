'use client';
import type { ThemeId } from '@/data';
import { useId } from 'react';
import {
  useStore,
  selectEditorTheme,
  selectEditorThemeIsLoading,
  selectSetEditorTheme,
} from '@/store';
import {
  Label,
  Select,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
  SelectSeparator,
} from '@/components';
import { themes } from '@/data';

const themesDarkSorted = themes
  .filter(({ type }) => type === 'dark')
  .sort((a, b) => a.label.toLocaleLowerCase().localeCompare(b.label.toLocaleLowerCase()));

const themesLightSorted = themes
  .filter(({ type }) => type === 'light')
  .sort((a, b) => a.label.toLocaleLowerCase().localeCompare(b.label.toLocaleLowerCase()));

export function EditorThemeControl() {
  const controlId = useId();
  const editorTheme = useStore(selectEditorTheme);
  const editorThemeIsLoading = useStore(selectEditorThemeIsLoading);
  const setEditorTheme = useStore(selectSetEditorTheme);

  return (
    <div className="grid grid-cols-3 items-center pl-2">
      <Label size="sm" htmlFor={controlId}>
        Theme
      </Label>
      <Select
        size="sm"
        value={editorTheme}
        onValueChange={(value) => setEditorTheme(value as ThemeId)}
        id={controlId}
        disabled={editorThemeIsLoading}
        className="col-span-2"
      >
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Light themes</SelectLabel>
            {themesLightSorted.map(({ id, label }) => (
              <SelectItem key={id} value={id}>
                {label}
              </SelectItem>
            ))}
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectLabel>Dark themes</SelectLabel>
            {themesDarkSorted.map(({ id, label }) => (
              <SelectItem key={id} value={id}>
                {label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
