import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import cls from "./LoadingScreen.module.scss";

export default function LoadingScreen() {
  return (
    <div className={cls.Screen}>
      <LoadingSpinner />
    </div>
  );
}
