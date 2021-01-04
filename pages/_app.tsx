import { Provider } from "next-auth/client";
import { FC } from "react";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";

const App: FC<any> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider>
      <CSSReset />
      <Provider session={pageProps.session}>
        <Component {...pageProps} />
      </Provider>
    </ChakraProvider>
  );
};

export default App;
