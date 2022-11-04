// imported Layout Component
import Layout from "../components/Layout"

// the app pages wrapped in the Layout component
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
