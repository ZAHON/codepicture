'use client';
import { useId } from 'react';
import { useMediaQuery } from '@/hooks';
import { useStore, selectFontFamily, selectSetFontFamily } from '@/store';
import { Label } from '@/components';
import { fonts } from '@/data';
import { FontFamilyControlSelect } from './font-family-control-select';
import { FontFamilyControlNativeSelect } from './font-family-control-native-select';

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
      <Label htmlFor={controlId} className="text-sm md:text-xs">
        Font family
      </Label>
      {matches ? (
        <FontFamilyControlSelect
          id={controlId}
          value={fontFamily}
          onChange={setFontFamily}
          fontsWithLigatures={fontsWithLigatures}
          fontsWithoutLigatures={fontsWithoutLigatures}
        />
      ) : (
        <FontFamilyControlNativeSelect
          id={controlId}
          value={fontFamily}
          onChange={setFontFamily}
          fontsWithLigatures={fontsWithLigatures}
          fontsWithoutLigatures={fontsWithoutLigatures}
        />
      )}
    </div>
  );
}
