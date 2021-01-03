import Layout from "layout";
import { useSession } from "next-auth/client";

const Ticket = () => {
  const [session] = useSession();

  if (!session) {
    return <div>you are not logged in</div>;
  } else {
    return (
      <Layout user={session.user}>
        <div>Ticket</div>
      </Layout>
    );
  }
};

export default Ticket;
