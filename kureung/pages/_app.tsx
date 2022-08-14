import '../styles/globals.css'
import type { AppProps } from 'next/app'

/**
 * window.kakao를 사용하기 위해 선언한다. 어느 파일에 써도 무관.
 */
declare global {
  interface Window {
    kakao: any;
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
