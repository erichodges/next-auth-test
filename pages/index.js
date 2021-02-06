import Head from 'next/head';
import { signIn, signOut, useSession } from 'next-auth/client';

export default function Home() {
  const [session, loading] = useSession();

  return (
    <>
      <Head>
        <title>Auth Demo</title>
      </Head>

      <nav>
        {!session ? (
          <button onClick={() => signIn('github')}>SignIn with Github</button>
        ) : (
          <>
            <span>
              {session.user.image && (
                <img
                  src={session.user.image}
                  style={{ width: '25px', borderRadius: '50%' }}
                />
              )}
              {'\u00A0'}
              {session.user.name}
            </span>
            {'\u00A0'}
            {'\u00A0'}
            <button onClick={signOut}>SignOut</button>
          </>
        )}
      </nav>
    </>
  );
}
