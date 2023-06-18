import '@styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@styles/globals.scss'
import {SSRProvider} from "react-bootstrap";
import Layout from '../components/layout'
import {ParallaxProvider} from "react-scroll-parallax";

function Application({Component, pageProps}) {
    return (
        <ParallaxProvider>
            <SSRProvider>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </SSRProvider>
        </ParallaxProvider>
    )
}

export default Application
