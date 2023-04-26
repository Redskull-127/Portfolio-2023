import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head >
      <link rel="manifest" href="/manifest.json" />
      <link rel="apple-touch-icon" href="/Images/bitmoji.ico"></link>
      <link rel="icon" href="/Images/bitmoji.ico" />
      <meta name="theme-color" content="#000000" />
      <meta name="description" content="Meer Tarbani Portfolio Website" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
