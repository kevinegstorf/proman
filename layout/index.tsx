import { FC } from "react";

const Layout: FC<any> = ({ children, user }) => {
  if (user.email !== "kevin.egstorf@gmail.com") {
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
