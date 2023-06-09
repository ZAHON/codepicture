'use client';
import type { FontId } from '@/data';
import { useId } from 'react';
import { useMediaQuery } from '@/hooks';
import { useStore, selectFontFamily, selectSetFontFamily } from '@/store';
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
import { fonts } from '@/data';
import { getFontFamilyCssVariableById } from '@/utils';

const fontsWithLigatures = fonts
  .filter(({ ligatures }) => ligatures)
  .sort((a, b) => a.label.toLocaleLowerCase().localeCompare(b.label.toLocaleLowerCase()));

const fontsWithoutLigatures = fonts
  .filter(({ ligatures }) => !ligatures)
  .sort((a, b) => a.label.toLocaleLowerCase().localeCompare(b.label.toLocaleLowerCase()));

export function FontFamilyControl() {
  const controlId = useId();
  const matches = useMediaQuery('(min-width: 768px)');
  const fontFamily = useStore(selectFontFamily);
  const setFontFamily = useStore(selectSetFontFamily);

  return (
    <div className="grid grid-cols-3 items-center pl-2">
      <Label htmlFor={controlId} size={matches ? 'sm' : 'md'}>
        Font family
      </Label>
      {matches ? (
        <Select
          size="sm"
          value={fontFamily}
          onValueChange={(value) => setFontFamily(value as FontId)}
          id={controlId}
          style={{ fontFamily: getFontFamilyCssVariableById(fontFamily) }}
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
      ) : (
        <NativeSelect
          size="md"
          value={fontFamily}
          onChange={(e) => setFontFamily(e.target.value as FontId)}
          id={controlId}
          style={{ fontFamily: getFontFamilyCssVariableById(fontFamily) }}
          wrapperProps={{ className: 'col-span-2' }}
        >
          <optgroup label="With ligatures">
            {fontsWithLigatures.map(({ id, label, cssVariable }) => (
              <option key={id} value={id} style={{ fontFamily: `var(${cssVariable})` }}>
                {label}
              </option>
            ))}
          </optgroup>
          <optgroup label="Without ligatures">
            {fontsWithoutLigatures.map(({ id, label, cssVariable }) => (
              <option key={id} value={id} style={{ fontFamily: `var(${cssVariable})` }}>
                {label}
              </option>
            ))}
          </optgroup>
        </NativeSelect>
      )}
    </div>
  );
}
