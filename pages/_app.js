import GlobalStyle from "../styles";
import { createGlobalStyle } from "styled-components";

const TheLook = createGlobalStyle`
  body {
    background-color: #145A32;
  }
`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <TheLook />
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
