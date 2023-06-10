'use client';
import type { ThemeId, Theme } from '@/data';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
  SelectSeparator,
} from '@/components';

interface EditorThemeControlSelectProps {
  id: string;
  disabled: boolean;
  themesLightSorted: Theme[];
  themesDarkSorted: Theme[];
  value: ThemeId;
  onChange: (value: ThemeId) => void;
}

export function EditorThemeControlSelect(props: EditorThemeControlSelectProps) {
  const { id, disabled, themesLightSorted, themesDarkSorted, value, onChange } = props;

  return (
    <Select
      size="sm"
      value={value}
      onValueChange={(value) => onChange(value as ThemeId)}
      id={id}
      disabled={disabled}
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
  );
}
