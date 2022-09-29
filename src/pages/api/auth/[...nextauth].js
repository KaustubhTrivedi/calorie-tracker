import NextAuth from "next-auth/next"
import { compare } from 'bcryptjs'
import { verifyPassword } from '../../../lib/auth/auth'
import Credentials from "next-auth/providers/credentials"
import dbConnect from "../../../lib/dbConnect"
import User from '../../../models/User'

export default NextAuth({
    secret: process.env.NEXTAUTH_SECRET_KEY,
    session: {
        strategy: "jwt",
        jwt: true,
        maxAge: 30 * 24 * 60 * 60,
    },
    providers: [
        Credentials({
            async authorize(credentials) {
                try {
                    await dbConnect();
                    const user = await User.findOne({
                        email: credentials.email,
                    });
                    if (!user) throw new Error("No user found");
                    const isPasswordValid = await verifyPassword(
                        credentials.password,
                        user.password
                    );
                    if (!isPasswordValid) throw new Error("Password is not valid");
                    User.findById(user._id, (err, result) => {
                        if (!err) {
                            if (!result) {
                                res.status(404).send("User was not found").end()
                            } else {
                                return {
                                    user
                                }
                            }
                        }
                    })
                    return { user }
                } catch (error) {
                    throw new Error(error);
                }
            }
        })
    ],
    pages: {
        signIn: "/login",
    },
    callbacks: {
        async session({ session, token }) {
            session.user = token.user;
            return session;
        },
        async jwt({ token, user }) {
            user && (token.user = user);
            return token;
        },
    },
})