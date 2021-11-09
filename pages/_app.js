import '../styles/globals.css'
import Layout from "../components/layout/Layout";
import {OpenContextProvider} from "../context/openContext";

function MyApp({ Component, pageProps }) {
  return <OpenContextProvider>
    <Layout>
    <Component {...pageProps} />
  </Layout>
  </OpenContextProvider>
}

export default MyApp
