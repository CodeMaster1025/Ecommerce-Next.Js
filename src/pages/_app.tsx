import { CartProvider } from "@/components/context/cartContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {

  return (
    <CartProvider>
    <Component {...pageProps} />
    </CartProvider>
  )
}
