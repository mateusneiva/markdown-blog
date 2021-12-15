import GlobalStyle from "../styles/global";
import type { AppProps } from "next/app";

function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default App;
