import { ClerkProvider } from '@clerk/nextjs'
import { useRouter } from 'next/router'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter()

  return (
    <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
    >
      <Component {...pageProps} />
    </ClerkProvider>
  )
}

export default MyApp
