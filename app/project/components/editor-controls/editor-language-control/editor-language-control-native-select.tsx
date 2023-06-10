'use client';
import type { LanguageId, Language } from '@/data';
import { NativeSelect } from '@/components';

interface EditorLanguageControlNativeSelectProps {
  id: string;
  disabled: boolean;
  data: Language[];
  value: LanguageId;
  onChange: (value: LanguageId) => void;
}

export function EditorLanguageControlNativeSelect(props: EditorLanguageControlNativeSelectProps) {
  const { id, disabled, value, data, onChange } = props;

  return (
    <NativeSelect
      size="md"
      value={value}
      onChange={(e) => onChange(e.target.value as LanguageId)}
      id={id}
      disabled={disabled}
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
