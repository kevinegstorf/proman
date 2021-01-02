import { FC } from "react";

const Layout: FC<any> = ({ children, user }) => {
  if (!user) {
    return <div>you need to log in</div>;
  }
  return (
    <div>
      <h1>Layout</h1>
      {children}
    </div>
  );
};

export default Layout;
