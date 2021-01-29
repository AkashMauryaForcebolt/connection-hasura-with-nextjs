import { GraphQLClient } from "graphql-hooks";

export const serverApolloClient = new GraphQLClient({
  url: process.env.LINK,
  headers: {
    "x-hasura-admin-secret": process.env.ADMIN_SECRET,
  },
  fetchOptions: { cache: "no-cache" },
});

export default serverApolloClient;