import Link from "next/link";
import { signIn, signOut, useSession } from 'next-auth/react'

export default function Navbar() {
    const { data: session, status } = useSession()

    return (
        <nav className="header">
            <h1 className="logo">
                <a href="#">NextAuth</a>
            </h1>
            <ul className={`main-nav ${!session && !status === "unauthenticated" ? 'loading' : 'loaded'}`}>
                {
                    session && (
                        <>
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
                                <Link href='/api/auth/signout' onClick={e => {
                                    e.preventDefault()
                                    signOut()
                                }}>
                                    Sign Out
                                </Link>
                            </li>
                        </>

                    )
                }

                {!session && status === "unauthenticated" && (
                    <li>
                        <Link href='/api/auth/signin' onClick={e => {
                            e.preventDefault()
                            signIn(('github'))
                        }}>
                            Sign In
                        </Link>
                    </li>
                )}

            </ul>

        </nav >
    )
}
