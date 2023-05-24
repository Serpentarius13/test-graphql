/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query allRepoQuery($query: String!, $endMarker: String) {\n    search(query: $query, type: REPOSITORY, first: 10, after: $endMarker) {\n\n      repositoryCount\n      pageInfo {\n        endCursor\n        startCursor\n        hasNextPage\n      }\n\n      edges {\n        node {\n          ... on Repository {\n            owner {\n              login\n            }\n            name\n            stargazerCount\n            url\n            defaultBranchRef {\n              target {\n                ... on Commit {\n                  history(first: 1) {\n                    nodes {\n                      committedDate\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n": types.AllRepoQueryDocument,
    "\n  query oneRepo ($name: String!, $owner: String!) {\n    repository(name: $name, owner: $owner) {\n      owner {\n        avatarUrl\n        login\n        url\n      }\n      name\n      stargazerCount\n      languages(first: 100) {\n        edges {\n          node {\n            name\n          }\n        }\n      }\n      url\n\n      shortDescriptionHTML\n      commitComments(last: 1) {\n        nodes {\n          commit {\n            committedDate\n          }\n        }\n      }\n      defaultBranchRef {\n        target {\n          ... on Commit {\n            history(first: 1) {\n              edges {\n                node {\n                  committedDate\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n": types.OneRepoDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query allRepoQuery($query: String!, $endMarker: String) {\n    search(query: $query, type: REPOSITORY, first: 10, after: $endMarker) {\n\n      repositoryCount\n      pageInfo {\n        endCursor\n        startCursor\n        hasNextPage\n      }\n\n      edges {\n        node {\n          ... on Repository {\n            owner {\n              login\n            }\n            name\n            stargazerCount\n            url\n            defaultBranchRef {\n              target {\n                ... on Commit {\n                  history(first: 1) {\n                    nodes {\n                      committedDate\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query allRepoQuery($query: String!, $endMarker: String) {\n    search(query: $query, type: REPOSITORY, first: 10, after: $endMarker) {\n\n      repositoryCount\n      pageInfo {\n        endCursor\n        startCursor\n        hasNextPage\n      }\n\n      edges {\n        node {\n          ... on Repository {\n            owner {\n              login\n            }\n            name\n            stargazerCount\n            url\n            defaultBranchRef {\n              target {\n                ... on Commit {\n                  history(first: 1) {\n                    nodes {\n                      committedDate\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query oneRepo ($name: String!, $owner: String!) {\n    repository(name: $name, owner: $owner) {\n      owner {\n        avatarUrl\n        login\n        url\n      }\n      name\n      stargazerCount\n      languages(first: 100) {\n        edges {\n          node {\n            name\n          }\n        }\n      }\n      url\n\n      shortDescriptionHTML\n      commitComments(last: 1) {\n        nodes {\n          commit {\n            committedDate\n          }\n        }\n      }\n      defaultBranchRef {\n        target {\n          ... on Commit {\n            history(first: 1) {\n              edges {\n                node {\n                  committedDate\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query oneRepo ($name: String!, $owner: String!) {\n    repository(name: $name, owner: $owner) {\n      owner {\n        avatarUrl\n        login\n        url\n      }\n      name\n      stargazerCount\n      languages(first: 100) {\n        edges {\n          node {\n            name\n          }\n        }\n      }\n      url\n\n      shortDescriptionHTML\n      commitComments(last: 1) {\n        nodes {\n          commit {\n            committedDate\n          }\n        }\n      }\n      defaultBranchRef {\n        target {\n          ... on Commit {\n            history(first: 1) {\n              edges {\n                node {\n                  committedDate\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;