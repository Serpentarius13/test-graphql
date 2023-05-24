import { graphql } from "@/gql";

export const getOneRepoQuery = graphql(`
  query oneRepo ($name: String!, $owner: String!) {
    repository(name: $name, owner: $owner) {
      owner {
        avatarUrl
        login
        url
      }
      name
      stargazerCount
      languages(first: 100) {
        edges {
          node {
            name
          }
        }
      }
      url

      shortDescriptionHTML
      commitComments(last: 1) {
        nodes {
          commit {
            committedDate
          }
        }
      }
      defaultBranchRef {
        target {
          ... on Commit {
            history(first: 1) {
              edges {
                node {
                  committedDate
                }
              }
            }
          }
        }
      }
    }
  }
`);
