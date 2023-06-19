import Navigation from './navbar';
import Footer from './footer';

export default function Layout({ children }) {
  return (
    <>
      <Navigation />
        <div className='page-container container-fluid rounded col-lg-10 col-xxl-8 px-0 pt-5 align-content-center pb-5'>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
