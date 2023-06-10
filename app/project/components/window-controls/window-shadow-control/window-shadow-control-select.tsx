'use client';
import type { ShadowId, Shadow } from '@/data';
import { Select, SelectContent, SelectGroup, SelectItem } from '@/components';

interface WindowShadowControlSelectProps {
  id: string;
  data: Shadow[];
  value: ShadowId;
  onChange: (value: ShadowId) => void;
}

export function WindowShadowControlSelect(props: WindowShadowControlSelectProps) {
  const { id, data, value, onChange } = props;

  return (
    <Select
      id={id}
      size="sm"
      value={value}
      onValueChange={(value) => onChange(value as ShadowId)}
      className="col-span-2"
    >
      <SelectContent>
        <SelectGroup>
          {data.map(({ id, label }) => (
            <SelectItem key={id} value={id}>
              {label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
