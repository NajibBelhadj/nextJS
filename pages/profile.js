import { getSession } from "next-auth/react"

export default function Profile({ data }) {

    return (
        <h1>profile {data}</h1>
    )
}
export async function getServerSideProps(context) {
    const session = await getSession(context);
    if (!session) {
        return {
            redirect: {
                destination: `/api/auth/signin?callbackUrl=http://localhost:3000/profile`,
                permanent: false
            }
        }
    }
    return {
        props: {
            session,
            data: session ? 'personalized Profile' : 'Free Profile'
        }
    }
}