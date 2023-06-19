import Navigation from './navbar';
import Footer from './footer';

export default function Layout({ children }) {
  return (
    <>
      <Navigation />
        <div className='page-container container mx-auto pt-8'>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
