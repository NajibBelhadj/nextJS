import User from "@/components/user";

export default function UserList({ users }) {
    return (
        <>
            <h1>List of Users</h1>
            {
                users.map(user => {
                    return (
                        <div key={user.id} style={{ backgroundColor: "#000", color: "#fff" }}>
                            <User user={user} />
                        </div>
                    )
                })
            }
        </>
    )
}

export async function getStaticProps() {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await res.json();
        return {
            props: {
                users: data,
            }
        }
    } catch (error) {
        console.log("some error here");
    }
}