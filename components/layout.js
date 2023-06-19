import Navigation from './navbar';
import Footer from './footer';
import Head from 'next/head';

export default function Layout({ children }) {
  return (
    <>
      <Navigation />
        <div className='page-container container lg:max-w-7xl mx-auto pb-8 pt-8'>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
