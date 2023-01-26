import Footer from "@/components/Footer"
import Head from "next/head"

export default function About() {
    return (
        <>
            <Head>
                <title>About ME</title>
                <meta name="description" content="Next By Me" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1 className="content">about</h1>
        </>
    )
}
About.getLayout = function PageLayout(page) {
    return (
        <>
            {page}
            <Footer />
        </>
    )
}
