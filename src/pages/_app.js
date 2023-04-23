import '@/styles/globals.css'
import Head from 'next/head'
import { useEffect } from 'react'
import Aos from "aos";
import "aos/dist/aos.css";
import NextNProgress from 'nextjs-progressbar';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({ duration: 250 });
  }, []);
  return (
    <>
      <NextNProgress />
      <Head>
          <title>Meer Tarbani&apos;s Portfolio</title>
          <link rel="icon" href="/Images/bitmoji.png" />
        </Head>
      <Component {...pageProps} />
    </>
  )
}
