import Link from "next/link";

export default function PostList({ posts }) {
    return (
        <>
            <h1>List of Post</h1>
            {
                posts.map(post => {
                    return (
                        <Link href={`posts/${post.id}`} passHref>
                            <div key={post.id} style={{ backgroundColor: "rgba(12, 131, 229, 0.47)" }}>
                                <h2> {post.id} {post.title} </h2>
                            </div>
                        </Link>
                    )
                })
            }
        </>
    )
}


export async function getStaticProps() {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await res.json();
        return {
            props: {
                posts: data.slice(0, 5),
            }
        }
    } catch (error) {
        console.log("some error here");
    }
}
