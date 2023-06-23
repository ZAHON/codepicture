'use client';
import { useId } from 'react';
import { useMediaQuery } from '@/hooks';
import {
  useProjectPageStore,
  selectWindowControlsType,
  selectWindowHeaderVisible,
  selectSetWindowControlsType,
} from '@project/store';
import { Label } from '@/components';
import { WindowControlsTypeControlSelect } from './window-controls-type-control-select';
import { WindowControlsTypeControlNativeSelect } from './window-controls-type-control-native-select';

export function WindowControlsTypeControl() {
  const controlId = useId();
  const matches = useMediaQuery('(min-width: 768px)');
  const windowHeaderVisible = useProjectPageStore(selectWindowHeaderVisible);
  const windowControlsType = useProjectPageStore(selectWindowControlsType);
  const setWindowControlsType = useProjectPageStore(selectSetWindowControlsType);

  if (!windowHeaderVisible) {
    return null;
  }

  return (
    <div className="grid grid-cols-3 items-center pl-2">
      <Label htmlFor={controlId} className="text-sm md:text-xs">
        Controls
      </Label>
      {matches ? (
        <WindowControlsTypeControlSelect
          id={controlId}
          value={windowControlsType}
          onChange={setWindowControlsType}
        />
      ) : (
        <WindowControlsTypeControlNativeSelect
          id={controlId}
          value={windowControlsType}
          onChange={setWindowControlsType}
        />
      )}
    </div>
  );
}
