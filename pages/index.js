import Head from 'next/head';
import { signIn, signOut, useSession } from 'next-auth/client';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [session, loading] = useSession();

  return (
    <>
      <Head>
        <title>Auth Demo</title>
      </Head>

      <nav>
        {!session ? (
          <button onClick={signIn}>SignIn</button>
        ) : (
          <button onClick={signOut}>SignOut</button>
        )}
      </nav>
    </>
  );
}
