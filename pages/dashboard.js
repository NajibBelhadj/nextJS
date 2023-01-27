import { signIn, getSession } from 'next-auth/react';
import { useEffect, useState } from 'react'

export default function Dashboard() {

    const [isLoading, setIsLoading] = useState(true);
    const [dashboardData, setDashboardData] = useState(null);
    useEffect(() => {
        async function fetchData() {
            try {
                const session = await getSession()
                if (!session) {
                    signIn();
                } else {
                    const res = await fetch('http://localhost:4000/dashboard');
                    const data = await res.json();
                    setDashboardData(data);
                    setIsLoading(false);
                }

            } catch (error) {
                console.log("some error", error);
            }
        }
        fetchData();
    }, [])
    return (
        <>
            {
                isLoading ? <div>Loading ..... </div> :
                    <>
                        <h2>Dashboard</h2>
                        <p>Posts - {dashboardData.posts}</p>
                        <p>Likes - {dashboardData.likes}</p>
                        <p>Followers - {dashboardData.followers}</p>
                        <p>Following - {dashboardData.following}</p>
                    </>
            }
        </>
    )
}
