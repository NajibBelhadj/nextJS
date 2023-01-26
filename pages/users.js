export default function UserList({ users }) {
    return (
        <>
            <h1>List of Users</h1>
            {
                users.map(user => {
                    return (
                        <div key={user.id} style={{ backgroundColor: "#000", color: "#fff" }}>
                            <p> name: {user.name} </p>
                            <p> username: {user.username} </p>
                            <p> email: {user.email} </p>
                            <p> street: {user.address?.street} </p>
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