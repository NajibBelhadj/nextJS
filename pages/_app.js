import Footer from "@/components/Footer";
import Headers from "@/components/Headers";
import Head from "next/head";
import '@/styles/layout.css'
import '@/styles/globals.css'
import Navbar from "@/components/Navbar";
import "@/components/Navbar.css";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />)
  }

  return (
    <>
      <Head>
        <title>Tuto next By Me</title>
        <meta name="description" content="Next By Me" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Headers />
      <SessionProvider>
        <Navbar />
        <Component {...pageProps} />
      </SessionProvider>
      <Footer />
    </>
  )
}
