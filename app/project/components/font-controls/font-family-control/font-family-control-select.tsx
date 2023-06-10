'use client';
import type { FontId, Font } from '@/data';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
  SelectSeparator,
} from '@/components';
import { getFontFamilyCssVariableById } from '@/utils';

interface FontFamilyControlSelectProps {
  id: string;
  value: FontId;
  onChange: (value: FontId) => void;
  fontsWithLigatures: Font[];
  fontsWithoutLigatures: Font[];
}

export function FontFamilyControlSelect(props: FontFamilyControlSelectProps) {
  const { id, value, onChange, fontsWithLigatures, fontsWithoutLigatures } = props;

  return (
    <Select
      size="sm"
      value={value}
      onValueChange={(value) => onChange(value as FontId)}
      id={id}
      style={{ fontFamily: getFontFamilyCssVariableById(value) }}
      className="col-span-2"
    >
      <SelectContent>
        <SelectGroup>
          <SelectLabel>With ligatures</SelectLabel>
          {fontsWithLigatures.map(({ id, label, cssVariable }) => (
            <SelectItem key={id} value={id} style={{ fontFamily: `var(${cssVariable})` }}>
              {label}
            </SelectItem>
          ))}
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Without ligatures</SelectLabel>
          {fontsWithoutLigatures.map(({ id, label, cssVariable }) => (
            <SelectItem key={id} value={id} style={{ fontFamily: `var(${cssVariable})` }}>
              {label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
