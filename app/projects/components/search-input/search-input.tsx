'use client';
import type { ChangeEvent } from 'react';
import { useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import { IconSearch } from '@tabler/icons-react';
import { TextInput } from '@/components';

export function SearchInput() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const search = searchParams.get('search');

  const [searchTerm, setSearchTerm] = useState(search ?? '');

  const debounced = useDebouncedCallback((value: string) => {
    if (value) {
      router.push(`${pathname}?search=${value}`);
    } else {
      router.push(`${pathname}`);
    }

    router.refresh();
  }, 500);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;

    setSearchTerm(value);
    debounced(value.trim());
  }

  return (
    <div className="relative w-full">
      <div className="pointer-events-none absolute left-0 top-0 flex h-9 w-9 items-center justify-center">
        <IconSearch size="1rem" aria-hidden="true" focusable="false" />
      </div>
      <TextInput
        type="text"
        placeholder="Search..."
        variant="underlined"
        value={searchTerm}
        onChange={handleChange}
        className="pl-9"
      />
    </div>
  );
}
