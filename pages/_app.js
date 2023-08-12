import "@styles/globals.scss";
import Layout from "../components/layout";
import Head from "next/head";

function Application({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Karen Sutherland Counseling</title>
        <link rel="icon" href="/favicon.png" />
        <script
          src="https://www.google.com/recaptcha/api.js"
          async
          defer
        ></script>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default Application
