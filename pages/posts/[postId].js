import { useRouter } from 'next/router';
import React from 'react'

export default function DetailPost({ post }) {
    const router = useRouter();
    if (router.isFallback) { // for Fallbach:true t3awed dgenereer getStaticProps f back
        return <h1>Loading....</h1>
    }
    return (
        <>
            <h2>  {post.id} {post.title} </h2>
            <p> {post.body} </p>
        </>
    )
}
export async function getStaticPaths() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json();
    const paths = data.slice(0, 5).map(post => {
        return {
            params: {
                postId: `${post.id}`
            }
        }
    });
    return {
        paths: paths,
        fallback: true
    }
    // return {
    //     paths: [
    //         {
    //             params: { postId: '1' }
    //         },
    //         {
    //             params: { postId: '2' }
    //         },
    //         {
    //             params: { postId: '3' }
    //         },
    //         {
    //             params: { postId: '4' }
    //         },
    //         {
    //             params: { postId: '5' }
    //         }
    //     ],
    //     fallback: false
    // }
}

//context fih key essmou params
export async function getStaticProps(context) {
    try {
        const { params } = context
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
        const data = await res.json();
        if (!data.id) {
            return {
                notFound: true
            }
        }
        return {
            props: {
                post: data,
            }
        }
    } catch (error) {
        console.log("some error here");
    }
}
