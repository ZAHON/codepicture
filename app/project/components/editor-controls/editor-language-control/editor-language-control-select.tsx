'use client';
import type { LanguageId, Language } from '@/data';
import { Select, SelectContent, SelectGroup, SelectItem } from '@/components';

interface EditorLanguageControlSelectProps {
  id: string;
  disabled: boolean;
  data: Language[];
  value: LanguageId;
  onChange: (value: LanguageId) => void;
}

export function EditorLanguageControlSelect(props: EditorLanguageControlSelectProps) {
  const { id, disabled, value, data, onChange } = props;

  return (
    <Select
      size="sm"
      value={value}
      onValueChange={(value) => onChange(value as LanguageId)}
      id={id}
      disabled={disabled}
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
