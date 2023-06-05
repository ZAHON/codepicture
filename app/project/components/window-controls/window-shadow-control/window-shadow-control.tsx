'use client';
import { useId } from 'react';
import { useStore, selectWindowShadow, selectSetWindowShadow } from '@/store';
import { Label, Select, SelectContent, SelectGroup, SelectItem } from '@/components';
import { shadows } from '@/data';

export function WindowShadowControl() {
  const controlId = useId();
  const windowShadow = useStore(selectWindowShadow);
  const setWindowShadow = useStore(selectSetWindowShadow);

  return (
    <div className="grid grid-cols-3 items-center pl-2">
      <Label size="sm" htmlFor={controlId}>
        Shadow
      </Label>
      <Select
        size="sm"
        value={windowShadow}
        onValueChange={(value) => setWindowShadow(value as typeof windowShadow)}
        className="col-span-2"
      >
        <SelectContent>
          <SelectGroup>
            {shadows.map(({ id, label }) => (
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
