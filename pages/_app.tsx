import { AppProps } from "next/dist/next-server/lib/router/router"
import { useEffect } from "react"
import analyticsClient from "../firebase/analyticsClient"
import firestoreClient from "../firebase/firestoreClient"
import "../styles/index.css"
import AuthProvider from "../hooks/useAuth"

export default function MyApp({ Component, pageProps }: AppProps): any {
  useEffect(() => {
    analyticsClient.setAnalyticsCollectionEnabled(true)
    ;(window as any).firestoreClient = firestoreClient // eslint-disable-line @typescript-eslint/no-explicit-any
  }, [])

  return (
  <AuthProvider>
    <Component {...pageProps} />
  </AuthProvider>
    )
}
