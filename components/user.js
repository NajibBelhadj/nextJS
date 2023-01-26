export default function User({ user }) {
    return (
        <>
            <p> name: {user.name} </p>
            <p> username: {user.username} </p>
            <p> email: {user.email} </p>
            <p> street: {user.address?.street} </p>
        </>
    )
}
