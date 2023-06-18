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
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
                      rel="stylesheet"
                      integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
                      crossOrigin="anonymous"/>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
                        integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz"
                        crossOrigin="anonymous"></script>
                <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
                        integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"
                        crossOrigin="anonymous"></script>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js"
                        integrity="sha384-fbbOQedDUMZZ5KreZpsbe1LCZPVmfTnH7ois6mU1QK+m14rQ1l2bGBq41eYeM/fS"
                        crossOrigin="anonymous"></script>
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </SSRProvider>
    )
}

export default Application
