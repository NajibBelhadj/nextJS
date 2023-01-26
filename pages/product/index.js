import Link from "next/link";



export default function productList({ products, productId = 20 }) {
    return (
        <>
            <h1> List of Products</h1>
            {/* <Link href="/">Home</Link>
            <Link href="/product/"><h2>Product 1</h2></Link>
            <Link href="/product/2"><h2>Product 2</h2></Link>
            <Link href={`/product/${productId}`} replace><h2>Product {productId} </h2></Link> */
            }
            {products.map(product => {
                return (
                    <Link key={product.id} href={`product/${product.id}`}>
                        <div>
                            <h2> {product.id} {product.title} {product.price} </h2>
                        </div>
                    </Link>
                )
            })}
        </>
    )
}


export async function getStaticProps() {
    try {
        const res = await fetch('http://localhost:4000/products')
        const data = await res.json();
        return {
            props: {
                products: data,
            },
            revalidate: 5,//revalidate product evry 5s without rebuild
        }
    } catch (error) {
        console.log("some error here");
    }
}
