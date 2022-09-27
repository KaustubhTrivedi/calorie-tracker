import NextAuth from "next-auth/next"
import { compare } from 'bcryptjs'
import { verifyPassword } from '../../../lib/auth/auth'
import CredentialsProvider from "next-auth/providers/credentials"
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
        CredentialsProvider({
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
                    return {
                        id: user._id,
                        email: user.email,
                        username: user.username
                    };
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