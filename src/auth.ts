import NextAuth from 'next-auth';
import GitHub from 'next-auth/providers/github';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { db } from '@/db';

// const options = {
//   providers: [
//     Providers.GitHub({
//       clientId: process.env.GITHUB_CLIENT_ID,
//       clientSecret: process.env.GITHUB_CLIENT_SECRET,
//     }),
//     // Add other providers here if needed
//   ],
//   // Add any other NextAuth.js options here
// };

// export default (req, res) => NextAuth(req, res, options);
