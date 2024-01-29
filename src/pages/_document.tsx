import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head />
      <link
    href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap"
    rel="stylesheet"
  />
        <link
     href="https://fonts.googleapis.com/css2?family=Fira+Sans+Condensed:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet"
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
