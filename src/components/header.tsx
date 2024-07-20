import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  Link,
  Input,
  NavbarItem,
  Spinner,
} from '@nextui-org/react';
import { SearchIcon } from './icons/search-icon';
import HeaderAuth from '@/components/header-auth';
import SearchInput from './search-input';
import { Suspense } from 'react';

export default async function Header() {
  return (
    <Navbar isBordered>
      <NavbarBrand className="mr-4">
        <Link href="/" className="font-bold text-inherit">
          NexTalk
        </Link>
      </NavbarBrand>

      <NavbarContent as="div" className="items-center">
        <Suspense fallback={<Spinner color="primary" />}>
          <SearchInput />
        </Suspense>
      </NavbarContent>

      <NavbarContent as="div" justify="end">
        <NavbarItem>
          <HeaderAuth />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
