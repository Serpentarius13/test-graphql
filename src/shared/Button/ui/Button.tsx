import cls from "./Button.module.scss";
import { classNames } from "@/features/classNames";
import { ButtonHTMLAttributes, memo } from "react";

type TButtonVariant = "filled" | "outline";

export interface IVariance {
  variant?: TButtonVariant;
}
interface IButton extends ButtonHTMLAttributes<HTMLButtonElement>, IVariance {
  children?: React.ReactNode;
}

export const Button = memo(
  ({
    variant = "filled",

    children,
    className = "",
    ...rest
  }: IButton) => {
    return (
      <>
        <button
          className={classNames(cls.Button, [cls[variant], className])}
          {...rest}
        >
          {children}
        </button>
      </>
    );
  }
);
