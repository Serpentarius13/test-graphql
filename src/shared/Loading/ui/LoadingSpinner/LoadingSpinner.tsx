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
      className={cls["lds-hourglass"]}
      style={{
        aspectRatio: "1/1",
        width: size,
        borderWidth: ~~(+size / 2),
        borderColor: color,
      }}
    />
  );
}
