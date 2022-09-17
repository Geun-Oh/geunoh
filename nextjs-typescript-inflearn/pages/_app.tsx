import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { AuthUserProvider } from '../context/auth_user_context'
import { QueryClient, QueryClientProvider } from 'react-query'
import { useRef } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  const queryClientRef = useRef<QueryClient>();
  if(!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }
  return (
    <QueryClientProvider client={queryClientRef.current}>
      <ChakraProvider>
        <AuthUserProvider>
          <Component {...pageProps} />
        </AuthUserProvider>
      </ChakraProvider>
    </QueryClientProvider>

  )

}

export default MyApp
