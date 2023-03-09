import type { AppProps } from "next/app";
import "@/styles/global.scss";
import localFont from "next/font/local";

const mainFont = localFont({ src: "../public/fonts/monofonto.ttf" });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={mainFont.className}>
      <Component {...pageProps} /> 
      <div className="scanline" />
    </main>
  );
}
