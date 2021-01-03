import { Provider } from "next-auth/client";
import { FC } from "react";
import "semantic-ui-css/semantic.min.css";

const App: FC<any> = ({ Component, pageProps }) => {
  return (
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default App;
