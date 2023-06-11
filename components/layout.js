import Navigation from './navbar'
import Footer from './footer'
import Head from "next/head";

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <title>Karen Sutherland Counciling</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navigation />
            <main>{children}</main>
            <Footer />
        </>
    )
}