import Head from 'next/head'
export default function Blog({ title, description }) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name='description' content={description} />
            </Head>
            <h1 className='content'> Article </h1>
        </>
    )
}

export async function getServerSideProps() {
    const user = process.env.DB_USER || ''
    const password = process.env.Db_PASSWORD || ''
    //console.log(`connecting to account with user: ${user} and password: ${password}`);
    return {
        props: {
            title: 'Article Title',
            description: 'Article description'
        }
    }
}