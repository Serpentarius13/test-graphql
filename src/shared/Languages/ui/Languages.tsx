import cls from "./Languages.module.scss";

interface LanguagesProps {
  languages: string[];
}

export default function Languages({ languages }: LanguagesProps) {
  return (
    <ul className={cls.languages}>
      {languages.map((l) => (
        <li key={l}>{l}</li>
      ))}
    </ul>
  );
}
