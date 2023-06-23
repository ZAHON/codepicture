'use client';
import { useRef, useEffect } from 'react';
import { Root as RadioGroup } from '@radix-ui/react-radio-group';
import * as colors from '@/data/colors';
import {
  useProjectPageStore,
  selectFrameFill,
  selectFrameFillType,
  selectSetFrameFill,
  selectSetFrameFillType,
} from '@project/store';
import { FrameFillControlFillSwatch } from './frame-fill-control-fill-swatch';

const data = [
  { name: 'Slate', items: colors.slate },
  { name: 'Gray', items: colors.gray },
  { name: 'Zinc', items: colors.zinc },
  { name: 'Neutral', items: colors.neutral },
  { name: 'Stone', items: colors.stone },
  { name: 'Red', items: colors.red },
  { name: 'Orange', items: colors.orange },
  { name: 'Amber', items: colors.amber },
  { name: 'Yellow', items: colors.yellow },
  { name: 'Lime', items: colors.lime },
  { name: 'Green', items: colors.green },
  { name: 'Emerald', items: colors.emerald },
  { name: 'Teal', items: colors.teal },
  { name: 'Cyan', items: colors.cyan },
  { name: 'Sky', items: colors.sky },
  { name: 'Blue', items: colors.blue },
  { name: 'Indigo', items: colors.indigo },
  { name: 'Violet', items: colors.violet },
  { name: 'Purple', items: colors.purple },
  { name: 'Fuchsia', items: colors.fuchsia },
  { name: 'Pink', items: colors.pink },
  { name: 'Rose', items: colors.rose },
];

export function FrameFillControlColors() {
  const frameFill = useProjectPageStore(selectFrameFill);
  const frameFillType = useProjectPageStore(selectFrameFillType);
  const setFrameFill = useProjectPageStore(selectSetFrameFill);
  const setFrameFillType = useProjectPageStore(selectSetFrameFillType);
  const swatchesRef = useRef<Map<string, HTMLButtonElement> | null>(null);

  useEffect(() => {
    const swatches = getSwatchesMap();
    const swatch = swatches.get(frameFill);

    if (swatch && frameFillType === 'color') {
      swatch.scrollIntoView({
        block: 'center',
      });
    }
  }, [frameFillType]);

  function getSwatchesMap() {
    if (!swatchesRef.current) {
      swatchesRef.current = new Map();
    }
    return swatchesRef.current;
  }

  function handleValueChange(value: string) {
    setFrameFill(value as typeof frameFill);
    setFrameFillType('color');
  }

  return (
    <RadioGroup
      value={frameFill}
      onValueChange={handleValueChange}
      className="scrollable flex h-52 flex-col gap-y-4 overflow-y-auto p-4 pr-1.5"
    >
      {data.map(({ name, items }) => (
        <div key={name} className="flex flex-col gap-y-2">
          <span className="cursor-default text-sm font-medium md:text-xs">{name}</span>
          <div className="grid grid-cols-5 gap-4">
            {items.map(({ id, value, label }) => (
              <FrameFillControlFillSwatch
                key={id}
                type="color"
                id={id}
                value={value}
                label={label}
                getSwatchesMap={getSwatchesMap}
              />
            ))}
          </div>
        </div>
      ))}
    </RadioGroup>
  );
}
