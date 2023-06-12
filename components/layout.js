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
          href='/favicon.ico'
        />
      </Head>
      <Navigation />
      <div className='content'>
        <div className='container-fluid p-0 align-content-center pb-5 text-slate'>
        <main>{children}</main>
        </div>
      </div>
      <Footer />
    </>
  );
}
