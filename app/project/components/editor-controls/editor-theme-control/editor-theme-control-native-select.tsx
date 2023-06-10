'use client';
import type { ThemeId, Theme } from '@/data';
import { NativeSelect } from '@/components';

interface EditorThemeControlNativeSelectProps {
  id: string;
  disabled: boolean;
  themesLightSorted: Theme[];
  themesDarkSorted: Theme[];
  value: ThemeId;
  onChange: (value: ThemeId) => void;
}

export function EditorThemeControlNativeSelect(props: EditorThemeControlNativeSelectProps) {
  const { id, disabled, themesLightSorted, themesDarkSorted, value, onChange } = props;

  return (
    <NativeSelect
      size="md"
      value={value}
      onChange={(e) => onChange(e.target.value as ThemeId)}
      id={id}
      disabled={disabled}
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
  );
}
