import * as actions from '@/actions';
import { Button } from '@nextui-org/react';
import { auth } from '@/auth';
import Profile from '@/components/profile';
import Header from '@/components/server/header';

export default async function Home() {
  return (
    <div>
      {/* <form action={actions.signIn}>
        <Button type="submit">Sign In</Button>
      </form>
      <form action={actions.signOut}>
        <Button type="submit">Sign Out</Button>
      </form> */}

      {/* <Profile /> */}
      <Header />
    </div>
  );
}
