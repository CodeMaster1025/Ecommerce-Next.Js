import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head />
      <link
    href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap"
    rel="stylesheet"
  />
      <link rel="icon" href="./FOOTER-LOGO.png" sizes="any" />
      <title>GIOM</title>
      <body className="bg-yellow-100 bg-opacity-25">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
