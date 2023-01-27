import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="header">
            <h1 className="logo">
                <a href="#">NextAuth</a>
            </h1>
            <ul className={`main-nav`}>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/blog">Blog</Link>
                </li>
                <li>
                    <Link href="/dashboard">Dashboard</Link>
                </li>
                <li>
                    <Link href="/dashboard-swr">Dashboard-swr</Link>
                </li>
                <li>
                    <Link href="/events">Events</Link>
                </li>
                <li>
                    <Link href="/product">Products</Link>
                </li>
                <li>
                    <Link href="/comments">Comments</Link>
                </li>
                <li>
                    <Link href="/users">Users</Link>
                </li>
                <li>
                    <Link href="/posts">Posts</Link>
                </li>
                <li>
                    <Link href="/news">News</Link>
                </li>
                <li>
                    <Link href="/todo">ToDo</Link>
                </li>
                <li>
                    <Link href='#'>
                        Sign In
                    </Link>
                </li>
                <li>
                    <Link href='#'>
                        Sign Out
                    </Link>
                </li>

            </ul>

        </nav>
    )
}
