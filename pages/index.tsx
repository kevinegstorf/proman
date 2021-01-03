import React from "react";
import { signIn, signOut, useSession } from "next-auth/client";
import Layout from "layout";
import Link from "next/link";

export default function Page() {
  const [session] = useSession();

  const handleSignIn = () => {
    signIn();
  };

  const handleSignOut = () => {
    signOut();
  };

  return (
    <div className="ui middle aligned center aligned grid">
      <div className="column">
        {!session && (
          <>
            <h2>Not signed in</h2>
            <button onClick={handleSignIn}>Sign in</button>
          </>
        )}
        {session && (
          <>
            <Layout user={session.user}>
              Signed in as {session.user.name} <br />
              {session.user.image && <img src={session.user.image} alt="" />}
              <button onClick={handleSignOut}>Sign out</button>
              <Link href="/ticket">Ticket</Link>
            </Layout>
          </>
        )}
      </div>
    </div>
  );
}
