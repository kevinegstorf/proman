import React from "react";
import { signIn, signOut, useSession } from "next-auth/client";
import Layout from "layout";
import Link from "next/link";
import { Center, Button, Box, Text, Avatar } from "@chakra-ui/react";

export default function Page() {
  const [session] = useSession();

  const handleSignIn = () => {
    signIn();
  };

  const handleSignOut = () => {
    signOut();
  };

  return (
    <>
      <Center>
        {!session && (
          <Box
            maxW="sm"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            p="6"
            mt="300"
          >
            <Button onClick={handleSignIn}>Sign in</Button>
          </Box>
        )}
        {session && (
          <>
            <Layout user={session.user}>
              <Text>Signed in as {session.user.name} </Text>

              {session.user.image && <Avatar src={session.user.image} />}
            </Layout>
            <Button onClick={handleSignOut}>Sign out</Button>
            <Link href="/ticket">Ticket</Link>
          </>
        )}
      </Center>
    </>
  );
}
