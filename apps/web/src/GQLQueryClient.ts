import { GraphQLClient } from "graphql-request";
import { QueryClient } from "@tanstack/react-query";

const GRAPHQL_ENDPOINT = "http://localhost:3000/api/graphql";

const graphqlRequestClient = new GraphQLClient(GRAPHQL_ENDPOINT, {
  credentials: "include",
  mode: "cors",
  errorPolicy: "all",
});

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      staleTime: 1000 * 60 * 5, // 5 minutes
    },
  },
});

export default graphqlRequestClient;
