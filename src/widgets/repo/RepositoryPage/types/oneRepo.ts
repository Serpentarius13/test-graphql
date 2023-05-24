import { IDefaultBranch } from "../../AllRepositories/models/store/useRepoStore";

export type TOneRepoCommits = {
  edges: Array<{ node: { committedDate: string } }>;
};

interface IRepoOwner {
  avatarUrl: string;
  login: string;
  url: string;
}

export interface IOneRepo {
  owner: IRepoOwner;
  name: string;
  stargazerCount: number;
  shortDescriptionHTML: string;
  languages: {
    edges: Array<{ node: { name: string } }>;
  };

  url: string;

  defaultBranchRef: IDefaultBranch<TOneRepoCommits>;
}
