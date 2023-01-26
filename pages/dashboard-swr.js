import useSWR from 'swr'

const fetcher = async () => {
    try {
        const res = await fetch('http://localhost:4000/dashboard');
        const data = await res.json();
        return data
    } catch (error) {
        console.log("some error", error);
    }
}
export default function DashboardSWR() {
    const { data, error } = useSWR('dashboard', fetcher)
    if (error) return 'An error has occured'
    if (!data) return 'Loading'
    return (
        <>
            <h2>Dashboard</h2>
            <p>Posts - {data.posts}</p>
            <p>Likes - {data.likes}</p>
            <p>Followers - {data.followers}</p>
            <p>Following - {data.following}</p>
        </>
    )
}
