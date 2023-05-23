import { Link } from "react-router-dom";
import cls from "./Button.module.scss";
import { classNames } from "@/features/classNames";
import { ButtonHTMLAttributes, memo } from "react";

type TButtonVariant = "filled" | "outline";
type TLink = { to: string; text: string };

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: TButtonVariant;
  children?: React.ReactNode;
  link?: TLink;
}

export const Button = memo(
  ({
    variant = "filled",
    link,
    children,
    className = "",
    ...rest
  }: IButton) => {
    return (
      <>
        {link ? (
          <Link
            to={link.to}
            className={classNames(cls.Button, [className, cls[variant]])}
          >
            {" "}
            {link.text}
          </Link>
        ) : (
          <button
            className={classNames(cls.Button, [cls[variant], className])}
            {...rest}
          >
            {children}
          </button>
        )}
      </>
    );
  }
);
