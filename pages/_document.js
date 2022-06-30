import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>

        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Bootstrap CSS */}
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous" />
        {/* Bootsrap Icon*/}
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css" />
        {/* My Css */}
        {/* <link rel="stylesheet" href="style.css" /> */}
        <title>My Portofolio | Kelvin Rahmadhani</title>


      </Head>
      <body id="home">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}