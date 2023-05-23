import { Button } from "@/shared/Button";
import cls from "./NotFound.module.scss";

export default function NotFound() {
  return (
    <div className={cls.NotFound}>
      <h1>Страница не найдена</h1>

      <h2>Хотите вернуться назад?</h2>

      <Button link={{ to: "/", text: "Домой" }} />
    </div>
  );
}
