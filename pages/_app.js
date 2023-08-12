import "@styles/globals.scss";
import Layout from "../components/layout";
import Head from "next/head";
import Script from "next/script";

function Application({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Karen Sutherland Counseling</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Script src="https://www.google.com/recaptcha/api.js" async defer />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default Application
