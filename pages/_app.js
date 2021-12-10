import '../styles/globals.scss'
import { wrapper } from '../redux/store'

const MyApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default wrapper.withRedux(MyApp)
