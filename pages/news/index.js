import React from 'react'

export default function NewsLists({ articles }) {
    return (
        <>
            <h1>List of News Articles</h1>
            {
                articles.map(article => {
                    return (
                        <div key={article.id} style={{ backgroundColor: "rgba(12, 131, 229, 0.47)" }}>
                            <h2> {article.id} {article.title} | {article.category} </h2>
                        </div>
                    )
                })
            }
        </>
    )
}

export async function getServerSideProps() {
    try {
        const res = await fetch("http://localhost:4000/news");
        const data = await res.json();
        return {
            props: {
                articles: data
            }
        }
    } catch (error) {
        console.log(error);
    }
}