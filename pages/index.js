import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {

    const router = useRouter();
    const handleClick = () => {
        console.log("Placing your order");
        router.push('/product')
        //router.replace('/product')
    }
    return (
        <div>
            <h1>Home Page</h1>
            <div>
                <Link href="/about">About</Link>
            </div>
            <div>
                <Link href="/blog">Blog</Link>
            </div>
            <div>
                <Link href="/dashboard">Dashboard</Link>
            </div>
            <div>
                <Link href="/dashboard-swr">Dashboard-swr</Link>
            </div>
            <div>
                <Link href="/events">Events</Link>
            </div>
            <div>
                <Link href="/product">Products</Link>
            </div>
            <div>
                <Link href="/comments">Comments</Link>
            </div>
            <div>
                <Link href="/users">Users</Link>
            </div>
            <div>
                <Link href="/posts">Posts</Link>
            </div>
            <div>
                <Link href="/news">News</Link>
            </div>

            <div>
                <button onClick={handleClick}>
                    Place Order
                </button>
            </div>
        </div>
    )
}
