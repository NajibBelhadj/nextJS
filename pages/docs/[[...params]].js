import { useRouter } from "next/router"

//http://localhost:3000/docs/feacher1/concept1/....
export default function Doc() {
    const router = useRouter();
    const { params = [] } = router.query
    if (params.length === 2) {
        return (
            <h1>Docs of feature {params[0]} and concept {params[1]} </h1>
        )
    } else if (params.length === 1) {
        return (
            <h1>Docs of feature {params[0]}</h1>
        )
    }

    return (
        <div>Docs Home Page</div>
    )
}
