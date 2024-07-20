'use client';

import { Input } from '@nextui-org/react';
import { useSearchParams } from 'next/navigation';
import { search } from '@/actions';
import { SearchIcon } from './icons/search-icon';

export default function SearchInput() {
  const searchParams = useSearchParams();

  return (
    <form action={search}>
      <Input
        name="term"
        classNames={{
          base: 'max-w-full h-10',
          mainWrapper: 'h-full',
          input: 'text-small',
          inputWrapper:
            'h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20',
        }}
        placeholder="Type to search..."
        size="sm"
        startContent={<SearchIcon size={18} />}
        defaultValue={searchParams.get('term') || ''}
        type="search"
      />
    </form>
  );
}
