import '@styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@styles/globals.scss'
import {SSRProvider} from "react-bootstrap";
import Layout from '../components/layout'
import Head from "next/head";

function Application({Component, pageProps}) {
    return (
        <SSRProvider>
            <Head>
                <title>Karen Sutherland Counciling</title>
                <link
                    rel='icon'
                    href='/favicon.png'
                />
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </SSRProvider>
    )
}

export default Application
