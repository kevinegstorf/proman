import Layout from "layout";
import { useSession } from "next-auth/client";

const Ticket = () => {
  const [session] = useSession();

  return (
    <Layout user={session.user}>
      <div>Ticket</div>
    </Layout>
  );
};

export default Ticket;
