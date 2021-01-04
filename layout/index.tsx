import Link from "next/link";
import { FC } from "react";
import DarkModeButton from "components/DarkModeButton";

const Layout: FC<any> = ({ children, user }) => {
  if (user.email !== "kevin.egstorf@gmail.com") {
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
      <h1>Layout</h1>
      {children}
    </div>
  );
};

export default Layout;
