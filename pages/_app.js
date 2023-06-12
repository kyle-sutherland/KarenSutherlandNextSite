import '@styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@styles/globals.scss'
import { SSRProvider } from "react-bootstrap";
import Layout from '../components/layout'

function Application({ Component, pageProps }) {
    return (
        <SSRProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
      </SSRProvider>
  )
}

export default Application
