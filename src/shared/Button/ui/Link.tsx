import { Link, LinkProps } from "react-router-dom";
import cls from "./Button.module.scss";
import { classNames } from "@/features/classNames";
import { memo } from "react";
import { IVariance } from "./Button";

interface ILink extends IVariance, LinkProps {
  className?: string;
  children: React.ReactNode;
}

export const CustomLink = memo(
  ({ variant = "filled", to, children, className = "", ...props }: ILink) => {
    return (
      <>
        <Link
          to={to}
          className={classNames(className, [cls.Button, cls[variant]])}
          {...props}
        >
          {children}
        </Link>
      </>
    );
  }
);
