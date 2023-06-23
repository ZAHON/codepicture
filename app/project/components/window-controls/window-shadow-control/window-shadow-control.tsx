'use client';
import { useId } from 'react';
import { useMediaQuery } from '@/hooks';
import { useProjectPageStore, selectWindowShadow, selectSetWindowShadow } from '@project/store';
import { Label } from '@/components';
import { shadows } from '@/data';
import { WindowShadowControlSelect } from './window-shadow-control-select';
import { WindowShadowControlNativeSelect } from './window-shadow-control-native-select';

export function WindowShadowControl() {
  const controlId = useId();
  const matches = useMediaQuery('(min-width: 768px)');
  const windowShadow = useProjectPageStore(selectWindowShadow);
  const setWindowShadow = useProjectPageStore(selectSetWindowShadow);

  return (
    <div className="grid grid-cols-3 items-center pl-2">
      <Label htmlFor={controlId} className="text-sm md:text-xs">
        Shadow
      </Label>
      {matches ? (
        <WindowShadowControlSelect
          id={controlId}
          data={shadows}
          value={windowShadow}
          onChange={setWindowShadow}
        />
      ) : (
        <WindowShadowControlNativeSelect
          id={controlId}
          data={shadows}
          value={windowShadow}
          onChange={setWindowShadow}
        />
      )}
    </div>
  );
}
