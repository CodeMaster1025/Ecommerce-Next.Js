import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head />
      <link rel="icon" href="./FOOTER-LOGO.png" sizes="any" />
      <title>GIOM</title>
      <body className="bg-yellow-100 bg-opacity-25 font-mono">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
