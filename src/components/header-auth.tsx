'use client';

import { Button, Spinner } from '@nextui-org/react';
import { signIn } from '@/actions';
import UserProfile from '@/components/user-profile';
import { FaGithub } from 'react-icons/fa';
import { useSession } from 'next-auth/react';
import FormButton from './common/form-button';

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
        <FormButton
          className="bg-black text-white"
          variant="flat"
          type="submit"
        >
          <FaGithub size={18} />
          Sign In with GitHub
        </FormButton>
      </form>
    );
  }

  return authContent;
}
