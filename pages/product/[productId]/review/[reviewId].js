import { useRouter } from "next/router"

export default function ReviwDetail() {
    const router = useRouter();
    const { productId, reviewId } = router.query
    return (
        <h1> Reviw {reviewId} of Product {productId} </h1>
    )
}
