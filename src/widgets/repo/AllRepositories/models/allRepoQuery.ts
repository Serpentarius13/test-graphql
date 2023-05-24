import { graphql } from "@/gql";

export const allRepoQuery = graphql(`
  query allRepoQuery($query: String!, $endMarker: String) {
    search(query: $query, type: REPOSITORY, first: 10, after: $endMarker) {

      repositoryCount
      pageInfo {
        endCursor
        startCursor
        hasNextPage
      }

      edges {
        node {
          ... on Repository {
            owner {
              login
            }
            name
            stargazerCount
            url
            defaultBranchRef {
              target {
                ... on Commit {
                  history(first: 1) {
                    nodes {
                      committedDate
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`);
