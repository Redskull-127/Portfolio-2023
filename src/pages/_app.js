import '@/styles/globals.css'
import Head from 'next/head'
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
          <title>Meer Tarbani&apos;s Portfolio</title>
          <link rel="icon" href="/Images/bitmoji.png" />
        </Head>
      <Component {...pageProps} />
    </>
  )
}
