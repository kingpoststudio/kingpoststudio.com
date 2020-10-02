import { ReactElement } from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Lexend Deca', sans-serif;
    src: url('/static/fonts/LexendDeca-Regular.ttf');
  }
  html, body {
    margin: 0;
    padding: 0;
    font-family: 'Lexend Deca', sans-serif;
  }
`;

interface AppProps {
  Component: any;
  pageProps: any;
}

function KPSApp(props: AppProps): ReactElement {
  const { Component, pageProps } = props;

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default KPSApp;
