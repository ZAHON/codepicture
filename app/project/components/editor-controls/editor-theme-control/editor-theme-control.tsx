'use client';
import type { ThemeId } from '@/data';
import { useId } from 'react';
import { useMediaQuery } from '@/hooks';
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
  NativeSelect,
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
  const matches = useMediaQuery('(min-width: 768px)');
  const editorTheme = useStore(selectEditorTheme);
  const editorThemeIsLoading = useStore(selectEditorThemeIsLoading);
  const setEditorTheme = useStore(selectSetEditorTheme);

  return (
    <div className="grid grid-cols-3 items-center pl-2">
      <Label htmlFor={controlId} size={matches ? 'sm' : 'md'}>
        Theme
      </Label>
      {matches ? (
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
      ) : (
        <NativeSelect
          size="md"
          value={editorTheme}
          onChange={(e) => setEditorTheme(e.target.value as ThemeId)}
          id={controlId}
          disabled={editorThemeIsLoading}
          wrapperProps={{ className: 'col-span-2' }}
        >
          <optgroup label="Light themes">
            {themesLightSorted.map(({ id, label }) => (
              <option key={id} value={id}>
                {label}
              </option>
            ))}
          </optgroup>
          <optgroup label="Dark themes">
            {themesDarkSorted.map(({ id, label }) => (
              <option key={id} value={id}>
                {label}
              </option>
            ))}
          </optgroup>
        </NativeSelect>
      )}
    </div>
  );
}
