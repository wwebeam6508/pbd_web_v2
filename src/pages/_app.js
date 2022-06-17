
import '../styles/globals.css'
import { createFirebaseApp } from '../firebase/clientApp'
function MyApp({ Component, pageProps }) {
  createFirebaseApp()
  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(<Component {...pageProps} />)
}

export default MyApp
