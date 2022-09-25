import { compare } from 'bcryptjs'
import NextAuth from "next-auth/next"
import Credentials from "next-auth/providers/credentials"
import dbConnect from "../../../lib/dbConnect"
import User from '../../../models/User'

export default NextAuth({
    session: {
        strategy:"jwt",
        jwt: true,
    },
    providers: [
        Credentials({
            async authorize(credentials) {
                await dbConnect()
                const user = await User.findOne({
                    email: credentials.email,
                })
                if (!result) {
                    throw new Error("User not found")
                } else {
                    console.log(result)
                }
                const checkPassword = await compare(credentials.password, result.password)
                if (!checkPassword) {
                    throw new Error("Wrong Password")
                }
                else {
                    console.log(checkPassword)
                }
                // client.close()
                return { email: user.email }
            }
        })
    ],
})