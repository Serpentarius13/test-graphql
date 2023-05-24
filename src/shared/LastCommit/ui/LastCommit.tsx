import cls from "./LastCommit.module.scss";

export default function LastCommit({ commitDate }: { commitDate: string }) {
  return (
    <p className={cls.commit}>
      Дата последнего коммита:{" "}
      <span>{new Date(commitDate).toLocaleDateString()}</span>
    </p>
  );
}
