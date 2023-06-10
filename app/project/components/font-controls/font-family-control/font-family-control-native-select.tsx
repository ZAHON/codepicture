'use client';
import type { FontId, Font } from '@/data';
import { NativeSelect } from '@/components';

interface FontFamilyControlNativeSelectProps {
  id: string;
  value: FontId;
  onChange: (value: FontId) => void;
  fontsWithLigatures: Font[];
  fontsWithoutLigatures: Font[];
}

export function FontFamilyControlNativeSelect(props: FontFamilyControlNativeSelectProps) {
  const { id, value, onChange, fontsWithLigatures, fontsWithoutLigatures } = props;

  return (
    <NativeSelect
      size="md"
      value={value}
      onChange={(e) => onChange(e.target.value as FontId)}
      id={id}
      wrapperProps={{ className: 'col-span-2' }}
    >
      <optgroup label="With ligatures">
        {fontsWithLigatures.map(({ id, label }) => (
          <option key={id} value={id}>
            {label}
          </option>
        ))}
      </optgroup>
      <optgroup label="Without ligatures">
        {fontsWithoutLigatures.map(({ id, label }) => (
          <option key={id} value={id}>
            {label}
          </option>
        ))}
      </optgroup>
    </NativeSelect>
  );
}
