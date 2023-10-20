"use client";
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import React, { ReactNode } from "react";

const client = new ApolloClient({
  ssrMode: true,
  link: createHttpLink({
    uri: "http://localhost:3000/api/graphql",
    credentials: "same-origin",
  }),
  cache: new InMemoryCache(),
});

interface Props {
  children: ReactNode;
}

const Providers = ({ children }: Props) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default Providers;
