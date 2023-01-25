import Link from "next/link";

//replace == traja3 ll home page

export default function productList({ productId = 20 }) {
    return (
        <>
            <Link href="/">Home</Link>
            <Link href="/product/"><h2>Product 1</h2></Link>
            <Link href="/product/2"><h2>Product 2</h2></Link>
            <Link href={`/product/${productId}`} replace><h2>Product {productId} </h2></Link>
        </>
    )
}
