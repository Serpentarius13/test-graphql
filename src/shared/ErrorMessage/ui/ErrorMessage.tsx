import { Button } from "@/shared/Button";
import cls from "./ErrorMessage.module.scss";

interface ErrorMessageProps {
  error: string;
  renderRefreshButton?: boolean;
}

export default function ErrorMessage({
  error,
  renderRefreshButton,
}: ErrorMessageProps) {
  return (
    <div className={cls.error}>
      <p>{error}</p>

      {renderRefreshButton && <Button onClick={() => location.reload()}> Go! </Button>}
    </div>
  );
}
