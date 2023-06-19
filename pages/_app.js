import '@styles/globals.scss'
import Layout from '../components/layout'
import Head from "next/head";
import Script from "next/script";

function Application({Component, pageProps}) {
    return (
        <>
            <Head>
                <title>Karen Sutherland Mindfulness Therapy</title>
                <link
                    rel='icon'
                    href='/favicon.png'
                />
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
            </>
    )
}

export default Application
