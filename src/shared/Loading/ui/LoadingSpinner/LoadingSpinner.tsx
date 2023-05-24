import cls from "./LoadingSpinner.module.scss";

interface LoadingSpinnerProps {
  size?: string;
  color?: string;
}

export default function LoadingSpinner({
  size = "80",
  color = "black",
}: LoadingSpinnerProps) {
  return (
    <div
      className={cls["spinner"]}
      style={{
        aspectRatio: "1/1",
        width: size + "px",
        borderWidth: ~~(+size / 10),
        borderBottomColor: color,
      }}
    />
  );
}
