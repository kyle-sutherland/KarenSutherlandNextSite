import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className="page-container container lg:max-w-7xl mx-auto pb-8 md:pt-10 font-serif">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
