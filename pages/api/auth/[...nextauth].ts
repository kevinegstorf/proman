import NextAuth from "next-auth";
import Providers from "next-auth/providers";

const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID as string;
const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET as string;

const options = {
  // Configure one or more authentication providers
  providers: [
    Providers.GitHub({
      clientId: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],

  // A database is optional, but required to persist accounts in a database
  database: process.env.DATABASE_URL,
};

export default (req: any, res: any) => NextAuth(req, res, options);
