import Link from "next/link";
import { FC } from "react";
import DarkModeButton from "components/DarkModeButton";
import { Center } from "@chakra-ui/react";
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
    <div>
      <DarkModeButton />
      <Center bg="tomato" h="100px" color="white">
        <Link href="/ticket">Ticket</Link>
        <Link href="/">Home</Link>
        <Link href="/backlog">Backlog</Link>
        {page}
      </Center>
      {children}
    </div>
  );
};

export default Layout;
