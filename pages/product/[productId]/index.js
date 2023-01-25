import { useRouter } from "next/router"

export default function productDetail() {
    const router = useRouter()
    const productId = router.query.productId
    return (
        <h1> Details product {productId}</h1>
    )
}
