'use client';
import type { WindowControlsType } from '@/store/slices/window-slice/window-slice.types';
import {
  MacOSFilledColor,
  MacOSFilledGray,
  MacOSOutlineColor,
  MacOSOutlineGray,
  Windows,
} from '@/svgs';
import { Select, SelectContent, SelectGroup, SelectItem } from '@/components';

interface WindowControlsTypeControlSelectProps {
  id: string;
  value: WindowControlsType;
  onChange: (value: WindowControlsType) => void;
}

export function WindowControlsTypeControlSelect(props: WindowControlsTypeControlSelectProps) {
  const { id, value, onChange } = props;

  return (
    <Select
      size="sm"
      value={value}
      onValueChange={(value) => onChange(value as WindowControlsType)}
      id={id}
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
  );
}
