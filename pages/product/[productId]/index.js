import { useRouter } from "next/router"

export default function ProductDetail({ product }) {
    const router = useRouter()
    if (router.isFallback) {
        return <div>Loading ....</div>
    }
    return (
        <div>
            <h2>
                {product.id} {product.title} {product.price}
            </h2>
            <p> {product.discription} </p>
        </div>
    )
}

export async function getStaticProps(context) {
    try {
        const { params } = context
        const res = await fetch(`http://localhost:4000/products/${params.productId}`)
        const data = await res.json();
        if (!data.id) {
            return {
                notFound: true
            }
        }
        return {
            props: {
                product: data,
            }
        }
    } catch (error) {
        console.log("some error here");
    }
}

export async function getStaticPaths() {

    return {
        paths: [{ params: { productId: '' } }],
        fallback: true
    }
}
