import Layout from "layout";
import { useSession } from "next-auth/client";
import Router from "next/router";

const Ticket = () => {
  const [session] = useSession();

  if (!session) {
    Router.push("/");
  } else {
    return (
      <Layout user={session.user}>
        <div>Ticket</div>
      </Layout>
    );
  }
};

export default Ticket;
