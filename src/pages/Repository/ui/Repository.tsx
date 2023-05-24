import { classNames } from "@/features/classNames";
import { CustomLink } from "@/shared/Button";
import RepositoryPage from "@/widgets/repo/RepositoryPage/ui/RepositoryPage";
import { useLocation, useParams } from "react-router-dom";

import cls from "./Repository.module.scss";

export default function Repository() {
  const { namespace } = useParams();

  if (typeof namespace !== "string") throw new Error("No namespace");
  const [name, owner] = namespace.split("*");

  if (typeof name !== "string" || typeof owner !== "string")
    throw new Error("Wrong namespace");

  const { state } = useLocation();

  const link = state ? `/?query=${state?.name}&page=${state?.page}` : "..";

  return (
    <section className={classNames(cls["repo-page"], ["container"])}>
      <CustomLink to={link}> Назад </CustomLink>
      <RepositoryPage name={name} owner={owner} />
    </section>
  );
}
