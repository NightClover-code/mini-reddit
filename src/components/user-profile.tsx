'use client';

import { signOut } from '@/actions';
import {
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
} from '@nextui-org/react';
import { useSession, signOut as nextAuthSignOut } from 'next-auth/react';

export default function UserProfile() {
  const { data: session } = useSession();

  if (!session?.user) return null;

  const { image, name } = session.user;

  const handleSignOut = async () => {
    await signOut();
    await nextAuthSignOut({ redirect: false });
  };

  return (
    <Dropdown placement="bottom-end">
      <DropdownTrigger>
        <Avatar
          isBordered
          as="button"
          className="transition-transform"
          color="primary"
          name={name!}
          size="sm"
          src={image!}
        />
      </DropdownTrigger>
      <DropdownMenu aria-label="Profile Actions" variant="flat">
        <DropdownItem key="profile" className="h-14 gap-2">
          <p className="font-semibold">Signed in as</p>
          <p className="font-semibold">{name}</p>
        </DropdownItem>
        <DropdownItem key="logout" color="danger" onClick={handleSignOut}>
          Log Out
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
