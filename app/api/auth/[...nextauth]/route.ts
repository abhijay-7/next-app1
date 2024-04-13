import GOogleProvider from "next-auth/providers/google"; 

import NextAuth from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/prisma/client";

export const authOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        GOogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        })
    ]
}

const handler = NextAuth(authOptions);

export {handler as GET, handler as POST};