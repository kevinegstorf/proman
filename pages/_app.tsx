import { Provider } from "next-auth/client";
import { FC } from "react";
import { AppProps } from "next/app";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import Layout from "layout";

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider>
      <CSSReset />
      <Layout page="Ticket">
        <Provider session={pageProps.session}>
          <Component {...pageProps} />
        </Provider>
      </Layout>
    </ChakraProvider>
  );
};

export default App;
