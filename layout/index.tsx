import { FC } from "react";
import DarkModeButton from "components/DarkModeButton";
import { Center, Box, Link, Container } from "@chakra-ui/react";
import { useSession } from "next-auth/client";

const Layout: FC<any> = ({ children, page }) => {
  const [session] = useSession();
  if (session && session.user.email !== "kevin.egstorf@gmail.com") {
    return (
      <div>
        you are cant use this app
        <Link href="https://google.com">Bye</Link>
      </div>
    );
  }

  return (
    <Center bg="tomato" h="100px" color="white">
      <DarkModeButton />
      <Link p="4" href="/ticket">
        Ticket
      </Link>
      <Link p="4" href="/">
        Home
      </Link>
      <Link p="4" href="/backlog">
        Backlog
      </Link>

      {children}
    </Center>
  );
};

export default Layout;
