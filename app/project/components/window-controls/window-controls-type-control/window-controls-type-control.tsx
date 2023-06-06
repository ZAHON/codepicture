'use client';
import { useId } from 'react';
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
import { Label, Select, SelectContent, SelectGroup, SelectItem } from '@/components';

export function WindowControlsTypeControl() {
  const controlId = useId();
  const windowHeaderVisible = useStore(selectWindowHeaderVisible);
  const windowControlsType = useStore(selectWindowControlsType);
  const setWindowControlsType = useStore(selectSetWindowControlsType);

  if (!windowHeaderVisible) {
    return null;
  }

  return (
    <div className="grid grid-cols-3 items-center pl-2">
      <Label size="sm" htmlFor={controlId} className="">
        Controls
      </Label>
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
    </div>
  );
}
