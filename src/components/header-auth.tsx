'use client';

import { Button, Spinner } from '@nextui-org/react';
import { signIn } from '@/actions';
import UserProfile from '@/components/user-profile';
import { FaGithub } from 'react-icons/fa';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';

export default function HeaderAuth() {
  const session = useSession();

  let authContent: React.ReactNode;
  if (session.status === 'loading') {
    authContent = <Spinner color="default" />;
  } else if (session.data?.user) {
    authContent = <UserProfile />;
  } else {
    authContent = (
      <form action={signIn}>
        <Button className="bg-black text-white" variant="flat" type="submit">
          <FaGithub size={18} />
          Sign In with GitHub
        </Button>
      </form>
    );
  }

  return authContent;
}
