import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ3bHJzaXNzdWhzcW5iYmJ3eGduIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjcyNTM1MTcsImV4cCI6MjA0MjgyOTUxN30.vbNDxkAt6Xx9GJ2qu4gtWdfXmjpKhYr9DOy8cfwRGyw";
const httpLink = new HttpLink({
  uri: "https://bwlrsissuhsqnbbbwxgn.supabase.co/graphql/v1",
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      apiKey: SUPABASE_ANON_KEY,
      Content_Type: "application/json",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
