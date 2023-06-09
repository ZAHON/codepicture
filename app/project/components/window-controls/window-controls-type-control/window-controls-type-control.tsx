'use client';
import { useId } from 'react';
import { useMediaQuery } from '@/hooks';
import {
  useStore,
  selectWindowControlsType,
  selectWindowHeaderVisible,
  selectSetWindowControlsType,
} from '@/store';
import {
  MacOSFilledColor,
  MacOSFilledGray,
  MacOSOutlineColor,
  MacOSOutlineGray,
  Windows,
} from '@/svgs';
import { Label, Select, SelectContent, SelectGroup, SelectItem, NativeSelect } from '@/components';

export function WindowControlsTypeControl() {
  const controlId = useId();
  const matches = useMediaQuery('(min-width: 768px)');
  const windowHeaderVisible = useStore(selectWindowHeaderVisible);
  const windowControlsType = useStore(selectWindowControlsType);
  const setWindowControlsType = useStore(selectSetWindowControlsType);

  if (!windowHeaderVisible) {
    return null;
  }

  return (
    <div className="grid grid-cols-3 items-center pl-2">
      <Label htmlFor={controlId} size={matches ? 'sm' : 'md'}>
        Controls
      </Label>
      {matches ? (
        <Select
          size="sm"
          value={windowControlsType}
          onValueChange={(value) => setWindowControlsType(value as typeof windowControlsType)}
          id={controlId}
          className="col-span-2"
        >
          <SelectContent>
            <SelectGroup>
              <SelectItem value="macos-filled-color" textValue="MacOS filled color">
                <MacOSFilledColor />
              </SelectItem>
              <SelectItem
                value="macos-filled-gray"
                textValue="MacOS filled gray"
                className="data-[state=checked]:text-neutral-12"
              >
                <MacOSFilledGray />
              </SelectItem>
              <SelectItem value="macos-outline-color" textValue="MacOS outline color">
                <MacOSOutlineColor />
              </SelectItem>
              <SelectItem
                value="macos-outline-gray"
                textValue="MacOS outline gray"
                className="data-[state=checked]:text-neutral-12"
              >
                <MacOSOutlineGray />
              </SelectItem>
              <SelectItem
                value="windows"
                textValue="Windows"
                className="data-[state=checked]:text-neutral-12"
              >
                <Windows />
              </SelectItem>
              <SelectItem value="none">No controls</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      ) : (
        <NativeSelect
          size="md"
          value={windowControlsType}
          onChange={(e) => setWindowControlsType(e.target.value as typeof windowControlsType)}
          id={controlId}
          wrapperProps={{ className: 'col-span-2' }}
        >
          <option value="macos-filled-color">MacOS filled color</option>
          <option value="macos-filled-gray">MacOS filled gray</option>
          <option value="macos-outline-color">MacOS outline color</option>
          <option value="macos-outline-gray">MacOS outline gray</option>
          <option value="windows">Windows</option>
          <option value="none">No controls</option>
        </NativeSelect>
      )}
    </div>
  );
}
