import * as actions from '@/actions';
import { Button } from '@nextui-org/react';

export default function Home() {
  return (
    <div>
      <form action={actions.signIn}>
        <Button type="submit">Sign In</Button>
      </form>
      <form action={actions.signOut}>
        <Button type="submit">Sign Out</Button>
      </form>
    </div>
  );
}
