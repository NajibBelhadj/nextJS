export default function ArticleListByCategory({ articles, category }) {
    return (
        <>
            <h1>
                List of News for Category <i>{category}</i>

            </h1>
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


export async function getServerSideProps(context) {
    try {
        const { params } = context
        const { category } = params
        const res = await fetch(`http://localhost:4000/news?category=${category}`);
        const data = await res.json();
        return {
            props: {
                articles: data,
                category
            }
        }
    } catch (error) {
        console.log(error);
    }
}