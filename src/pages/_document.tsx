import { Html, Head, Main, NextScript } from "next/document";
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head />
      <link rel="icon" href="./icon.png" sizes="any" />
      <title>GIOM</title>
      <body className="bg-yellow-100 bg-opacity-25 font-mono">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
