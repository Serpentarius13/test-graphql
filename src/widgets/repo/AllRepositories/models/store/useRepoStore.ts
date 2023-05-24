import { StateCreator, create } from "zustand";
import { PersistOptions, createJSONStorage, persist } from "zustand/middleware";
import { AllRepoQueryQuery } from "@/gql/graphql";

type TPageInfo = AllRepoQueryQuery["search"]["pageInfo"];
export type TReposCommits = { nodes: Array<{ committedDate: string }> };

export interface IDefaultBranch<T> {
  target: { history: T };
}

export interface IRepository {
  node: {
    owner: { login: string };
    name: string;
    stargazerCount: number;
    url: string;

    defaultBranchRef: IDefaultBranch<TReposCommits>;
  };
}

type TRepositories = {
  endMarker: TPageInfo["endCursor"];
  startMarker: TPageInfo["startCursor"];
  repos: IRepository[];
};

type TFetchedPages = Record<number, TRepositories>;
interface IRepoStore {
  fetchedPages: TFetchedPages;
  hasMore: boolean;
  getFetchedPage: (page: number) => TRepositories | undefined;
  addFetchedPage: (page: number, repos: AllRepoQueryQuery) => void;

  clearRepos: () => void;
  getLastPage: () => number;
}

function transformRepoResult(result: AllRepoQueryQuery): TRepositories {
  return {
    endMarker: result.search.pageInfo.endCursor,
    startMarker: result.search.pageInfo.startCursor,
    repos: result.search.edges as IRepository[],
  };
}

type MyPersist = (
  config: StateCreator<IRepoStore>,
  options: PersistOptions<IRepoStore>
) => StateCreator<IRepoStore>;

export const useRepoStore = create<IRepoStore>(
  (persist as MyPersist)(
    (set, get) => ({
      fetchedPages: {},
      hasMore: true,
      getFetchedPage: (page: number) => get().fetchedPages[page],
      addFetchedPage: (page: number, queryData: AllRepoQueryQuery) => {
        const nextPage = transformRepoResult(queryData);

        return set((state) => {
          const nextState = {
            fetchedPages: {
              ...state.fetchedPages,

              [page]: nextPage,
            },
            hasMore: queryData.search.pageInfo.hasNextPage,
          };

          return nextState;
        });
      },

      clearRepos: () => set({ fetchedPages: {} }),
      getLastPage: () => {
        const page = Object.keys(get().fetchedPages).at(-1);

        return Number(page) ?? 1;
      },
    }),
    {
      name: "repo-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
