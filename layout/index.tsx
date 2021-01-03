import { FC } from "react";
import { config } from "config";

const Layout: FC<any> = ({ children, user }) => {
  if (user.email !== config.email) {
    return <div>You have no access</div>;
  }

  return (
    <div>
      <h1>Layout</h1>
      {children}
    </div>
  );
};

export default Layout;
