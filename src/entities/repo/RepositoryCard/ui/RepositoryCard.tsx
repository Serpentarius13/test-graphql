import { IRepository } from "@/widgets/repo/AllRepositories/models/store/useRepoStore";
import cls from "./RepositoryCard.module.scss";

import { classNames } from "@/features/classNames";

import { CustomLink } from "@/shared/Button";
import { Stars } from "@/shared/Stars";
import { LastCommit } from "@/shared/LastCommit";

import { useSearchParams } from "react-router-dom";

export default function RepositoryCard({
  node: {
    name,
    stargazerCount,
    url,
    defaultBranchRef,
    owner: { login },
  },
  last,
}: IRepository & { last: ((el: HTMLElement | null) => void) | null }) {
  const commitDate = defaultBranchRef
    ? defaultBranchRef.target.history.nodes[0].committedDate
    : "Нет даты";

  const [searchParams] = useSearchParams();

  return (
    <article className={classNames(cls["repo"], ["borderline"])} ref={last}>
      <div className={classNames(cls["repo-top"], ["center"])}>
        <h5>{name}</h5>

        <Stars count={stargazerCount} />
      </div>

      <LastCommit commitDate={commitDate} />

      <div className={classNames(cls["repo-buttons"], ["center"])}>
        <a href={url} target="_blank">
          Ссылка на репозиторий
        </a>

        <CustomLink
          to={{
            pathname: `/repository/${name}*${login}`,
          }}
          state={{ name, page: searchParams.get("page") }}
        >
          Подробнее
        </CustomLink>
      </div>
    </article>
  );
}
