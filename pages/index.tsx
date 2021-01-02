import React from "react";
import { signIn, signOut, useSession } from "next-auth/client";

export default function Page() {
  const [session] = useSession();

  const handleSignIn = () => {
    console.log("click");
    signIn();
  };

  const handleSignOut = () => {
    signOut();
  };
  return (
    <>
      {!session && (
        <>
          Not signed in <br />
          <button onClick={handleSignIn}>Sign in</button>
        </>
      )}
      {session && (
        <>
          Signed in as {session.user.email} <br />
          <button onClick={handleSignOut}>Sign out</button>
        </>
      )}
    </>
  );
}
