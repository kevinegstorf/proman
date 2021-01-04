import Layout from "layout";
import { useSession } from "next-auth/client";
import { Center, Container } from "@chakra-ui/react";
const Ticket = () => {
  const [session] = useSession();

  if (!session) {
    return <div>you are not logged in</div>;
  } else {
    return (
      <Layout user={session.user}>
        <Container>
          <Center bg="tomato" h="100px" color="white">
            <div>Ticket</div>
          </Center>
        </Container>
      </Layout>
    );
  }
};

export default Ticket;
