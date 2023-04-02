import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="Hi, I'm Patrik,
          Front-End Developer with a passion for creating
          visually pleasing websites and web applications, that deliver
          exceptional user experiences."
        />

        <meta name="theme-color" content="#05321e" />

        <meta property="og:title" content="Skilled Front-End Developer" />
        <meta
          property="og:description"
          content="Hi, I'm Patrik,
          Front-End Developer with a passion for creating
          visually pleasing websites and web applications, that deliver
          exceptional user experiences."
        />
        <meta property="og:image" content="/images/og-image.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
