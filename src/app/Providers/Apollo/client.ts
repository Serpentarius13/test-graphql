import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

function getGithubCredentials(): { endpoint: string; key: string } {
  const endpoint = import.meta.env.VITE_GITHUB_ENDPOINT;
  const key = import.meta.env.VITE_GITHUB_API_KEY;

  if (typeof endpoint !== "string" || typeof key !== "string")
    throw new Error("No credentials was provided");

  return { endpoint, key };
}

export const client = new ApolloClient({
  link: new HttpLink({
    uri: getGithubCredentials().endpoint,
    headers: {
      Authorization: `Bearer ${getGithubCredentials().key}`,
    },
  }),
  cache: new InMemoryCache(),
});
