
import '../styles/globals.css'
import { createFirebaseApp } from '../firebase/clientApp'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
function MyApp({ Component, pageProps }) {
  createFirebaseApp()
  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(<Component {...pageProps} />)
}

export default MyApp
