import Head from 'next/head';
import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>King Post Studio</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
