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
        const { params, req, res, query } = context
        //console.log(params);==> { category: 'sports' }
        //console.log(query); ==> { category: 'sports' }
        //console.log(req.headers.cookie);
        //res.setHeader('Set-Cookie', ['name = Vishwas'])
        const { category } = params
        const resp = await fetch(`http://localhost:4000/news?category=${category}`);
        const data = await resp.json();
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