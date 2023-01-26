import Footer from "@/components/Footer";
import Headers from "@/components/Headers";
import '../styles/layout.css'

export default function App({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />)
  }

  return (
    <>
      <Headers />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
