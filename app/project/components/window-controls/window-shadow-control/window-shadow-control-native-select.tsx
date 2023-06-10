'use client';
import type { ShadowId, Shadow } from '@/data';
import { NativeSelect } from '@/components';

interface WindowShadowControlNativeSelectProps {
  id: string;
  data: Shadow[];
  value: ShadowId;
  onChange: (value: ShadowId) => void;
}

export function WindowShadowControlNativeSelect(props: WindowShadowControlNativeSelectProps) {
  const { id, data, value, onChange } = props;

  return (
    <NativeSelect
      id={id}
      size="md"
      value={value}
      onChange={(e) => onChange(e.target.value as ShadowId)}
      wrapperProps={{ className: 'col-span-2' }}
    >
      {data.map(({ id, label }) => (
        <option key={id} value={id}>
          {label}
        </option>
      ))}
    </NativeSelect>
  );
}
