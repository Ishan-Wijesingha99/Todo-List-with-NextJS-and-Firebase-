import Layout from '@/components/Layout'
import { AuthProvider } from '@/context/AuthContext'
import '@/styles/globals.css'



export default function App({ Component, pageProps }) {
  return (
    // AuthProvider for react context
    <AuthProvider> 
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  )
}
