import cls from "./Repository.module.scss";
import { IOneRepo } from "@/widgets/repo/RepositoryPage/types/oneRepo";
import { Stars } from "@/shared/Stars";
import { LastCommit } from "@/shared/LastCommit";

import { Languages } from "@/shared/Languages";


export default function Repository({
  name,
  owner,
  stargazerCount,
  languages,
  shortDescriptionHTML = "",
  defaultBranchRef,
  url: repoUrl,
}: IOneRepo) {
  const { avatarUrl, login, url } = owner;

  const commitDate = defaultBranchRef
    ? defaultBranchRef.target.history.edges[0].node.committedDate
    : "Нет даты";



  return (
    <article className={cls.repo}>
      <a href={repoUrl} target="_blank" className={cls["repo-top"]}>
        <h1>Страница репозитория {name}</h1>

        <Stars count={stargazerCount} />
      </a>

      <LastCommit commitDate={commitDate} />

      <a href={url} target="_blank" className={cls["repo-author"]}>
        <h2>Владелец: {login}</h2>
        <img src={avatarUrl} alt={`Аватар ${login}`} />{" "}
      </a>

      <div>
        <h3>Описание:</h3>{" "}
        <p dangerouslySetInnerHTML={{ __html: shortDescriptionHTML }} />
      </div>

      <Languages languages={languages.edges.map((n) => n.node.name)} />
    </article>
  );
}
