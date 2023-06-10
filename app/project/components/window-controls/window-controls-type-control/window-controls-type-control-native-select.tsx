'use client';
import type { WindowControlsType } from '@/store/slices/window-slice/window-slice.types';
import { NativeSelect } from '@/components';

interface WindowControlsTypeControlNativeSelectProps {
  id: string;
  value: WindowControlsType;
  onChange: (value: WindowControlsType) => void;
}

export function WindowControlsTypeControlNativeSelect(
  props: WindowControlsTypeControlNativeSelectProps
) {
  const { id, value, onChange } = props;

  return (
    <NativeSelect
      size="md"
      value={value}
      onChange={(e) => onChange(e.target.value as WindowControlsType)}
      id={id}
      wrapperProps={{ className: 'col-span-2' }}
    >
      <option value="macos-filled-color">MacOS filled color</option>
      <option value="macos-filled-gray">MacOS filled gray</option>
      <option value="macos-outline-color">MacOS outline color</option>
      <option value="macos-outline-gray">MacOS outline gray</option>
      <option value="windows">Windows</option>
      <option value="none">No controls</option>
    </NativeSelect>
  );
}
