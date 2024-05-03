'use client';

import { useSession } from 'next-auth/react';

export default function Profile() {
  const session = useSession();

  if (!session.data) {
    return (
      <div>
        <p>Not signed in</p>
      </div>
    );
  }

  return (
    <div>
      <p>Signed in as {session.data?.user?.email}</p>
    </div>
  );
}
