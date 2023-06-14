'use client';
import { useRef, useEffect } from 'react';
import { Root as RadioGroup } from '@radix-ui/react-radio-group';
import { gradients } from '@/data';
import {
  useStore,
  selectFrameFill,
  selectFrameFillType,
  selectSetFrameFill,
  selectSetFrameFillType,
} from '@project/store';
import { FrameFillControlFillSwatch } from './frame-fill-control-fill-swatch';

export function FrameFillControlGradients() {
  const frameFill = useStore(selectFrameFill);
  const frameFillType = useStore(selectFrameFillType);
  const setFrameFill = useStore(selectSetFrameFill);
  const setFrameFillType = useStore(selectSetFrameFillType);
  const swatchesRef = useRef<Map<string, HTMLButtonElement> | null>(null);
  const radioGroupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const swatches = getSwatchesMap();
    const swatch = swatches.get(frameFill);

    if (swatch && frameFillType === 'gradient') {
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
    setFrameFillType('gradient');
  }

  return (
    <RadioGroup
      ref={radioGroupRef}
      value={frameFill}
      onValueChange={handleValueChange}
      className="scrollable grid h-52 grid-cols-5 gap-4 overflow-y-auto p-4 pr-1.5"
    >
      {gradients.map(({ id, value, label }) => (
        <FrameFillControlFillSwatch
          key={id}
          type={frameFillType}
          id={id}
          value={value}
          label={label}
          getSwatchesMap={getSwatchesMap}
        />
      ))}
    </RadioGroup>
  );
}
