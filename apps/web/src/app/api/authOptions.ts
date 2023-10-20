// @ts-ignore
import { NextAuthOptions, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const LoginMutation = `
mutation LoginMutation {
  login(loginUserInput: {email: "kyemoon2", password: "123"}) {
    authToken
    refreshToken
    user {
      _id
      email
    }
  }
}
`;

const RefreshTokenMutation = `
mutation RefreshToken($refreshTokenInput: RefreshTokenInput!) {
  refreshAccessToken(refreshTokenInput: $refreshTokenInput) {
    authToken
    refreshToken
    user {
      _id
      email
    }
  }
}
`;

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        console.log("authorize", { credentials, req });
        // credentials.username;
        // credentials.password;
        //
        // const res = await fetch("http://localhost:4000/graphql", {
        //   method: "POST",
        //   headers: { "Content-Type": "application/json" },
        //   body: JSON.stringify({
        //     query: LoginMutation,
        //   }),
        // });
        // const { data } = await res.json();
        // console.log("data", data);
        // const user = data.login.user;
        // if (user) {
        //   console.log("user", user);
        //   // Any object returned will be saved in `user` property of the JWT
        //   return { id: user._id, email: user.email } as User;
        // } else {
        // If you return null then an error will be displayed advising the user to check their details.
        return null;

        // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        // }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, account, profile, isNewUser }) {
      console.log("jwt", { token, user, account, profile, isNewUser });
      if (user) return { ...token, ...user };
      return token;
    },
    async session({ session, token }) {
      return session;
    },
  },
};
