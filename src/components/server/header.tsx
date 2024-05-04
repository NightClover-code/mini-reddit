'use server';

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Input,
  Button,
} from '@nextui-org/react';
import { SearchIcon } from '../icons/search-icon';
import { signIn } from '@/actions';
import { auth } from '@/auth';
import UserProfile from '@/components/user-profile';
import { FaGithub } from 'react-icons/fa';

export default async function Header() {
  const session = await auth();

  let authContent: React.ReactNode;

  if (session?.user) {
    authContent = <UserProfile />;
  } else {
    authContent = (
      <NavbarContent as="div" justify="end">
        <NavbarItem>
          <form action={signIn}>
            <Button
              className="bg-black text-white"
              variant="flat"
              type="submit"
            >
              <FaGithub size={18} />
              Sign In with GitHub
            </Button>
          </form>
        </NavbarItem>
      </NavbarContent>
    );
  }

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

      {authContent}
    </Navbar>
  );
}
