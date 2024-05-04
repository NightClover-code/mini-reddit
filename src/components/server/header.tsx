'use server';

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  Link,
  Input,
  NavbarItem,
} from '@nextui-org/react';
import { SearchIcon } from '../icons/search-icon';
import HeaderAuth from '@/components/header-auth';

export default async function Header() {
  return (
    <Navbar isBordered>
      <NavbarBrand className="mr-4">
        <Link href="/" className="font-bold text-inherit">
          NexTalk
        </Link>
      </NavbarBrand>

      <NavbarContent as="div" className="items-center">
        <Input
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
          type="search"
        />
      </NavbarContent>

      <NavbarContent as="div" justify="end">
        <NavbarItem>
          <HeaderAuth />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
