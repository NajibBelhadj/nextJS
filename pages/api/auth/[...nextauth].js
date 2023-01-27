import NextAuth from "next-auth";
import GithubProviders from "next-auth/providers/github";

export default NextAuth({
    providers: [
        GithubProviders({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
            checks: 'none'
        })
    ],
    database: process.env.DB_URL,
    session: {
        strategy: "jwt"
    },
    jwt: {
        secret: process.env.JWT_SECRET,
        maxAge: 60 * 60 * 24 * 30
    }
})