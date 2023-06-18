import Navigation from './navbar';
import Footer from './footer';
import Head from 'next/head';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Karen Sutherland Counciling</title>
        <link
          rel='icon'
          href='/favicon.png'
        />
      </Head>
      <Navigation />
        <div className='page-container container-fluid rounded col-lg-10 col-xxl-8 p-0  pt-5 align-content-center pb-5'>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
