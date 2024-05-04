'use client';

import { signOut } from '@/actions';
import {
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
} from '@nextui-org/react';
import { useSession } from 'next-auth/react';

export default function UserProfile() {
  const session = useSession();

  if (!session.data?.user) return null;

  const { email, image, name } = session.data.user;

  const handleSignOut = async () => {
    signOut();
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
