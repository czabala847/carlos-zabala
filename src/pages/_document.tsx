import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta
          name="keywords"
          content="Carlos Zabala, Desarrollo web, Front-end, Back-end, frontend, backend"
        />
        <meta name="author" content="Carlos Zabala Roqueme" />
        <meta
          name="copyright"
          content="Carlos Zabala, todos los derechos reservados."
        />
        <meta name="robots" content="ALL" />
        <link
          rel="canonical"
          href="https://czabala847.github.io/carlos-zabala/#/"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
