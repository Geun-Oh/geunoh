import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import NavBar from '../components/NavBar'

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <NavBar />
    <Component {...pageProps} />
    <style jsx global>{`
  a {
      text-decoration: none;
  }
  .active {
      color: yellow;
  }
`}</style>
  </>
}

export default MyApp
