import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

import { prisma } from "@/lib/prisma";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "credentials",

      credentials: {
        email: {
          label: "Email",
          type: "email",
        },

        password: {
          label: "Password",
          type: "password",
        },
      },

      async authorize(credentials) {
        try {
          if (
            !credentials?.email ||
            !credentials?.password
          ) {
            return null;
          }

          const user =
            await prisma.user.findUnique({
              where: {
                email:
                  credentials.email,
              },
            });

          if (!user) {
            return null;
          }

          const isValidPassword =
            await bcrypt.compare(
              credentials.password,
              user.password
            );

          if (!isValidPassword) {
            return null;
          }

          return {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
          };
        } catch (error) {
          console.error(
            "Auth Error:",
            error
          );

          return null;
        }
      },
    }),
  ],

  callbacks: {
    async jwt({
      token,
      user,
    }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }

      return token;
    },

    async session({
      session,
      token,
    }) {
      if (session.user) {
        session.user.id =
          token.id as string;

        session.user.role =
          token.role as string;
      }

      return session;
    },
  },

  session: {
    strategy: "jwt",
  },

  pages: {
    signIn: "/login",
  },

  secret:
    process.env.AUTH_SECRET,
});

export { handler as GET, handler as POST };