import React, { ReactNode, ReactPropTypes } from "react";

import cls from "./ErrorBoundary.module.scss";
import { CustomLink } from "@/shared/Button";

interface IErrorProps {
  children: ReactNode;
}

export class ErrorBoundary extends React.Component<
  IErrorProps,
  { hasError: boolean; errorText?: string }
> {
  constructor(props: IErrorProps) {
    super(props);

    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    // You can also log the error to an error reporting service
    this.setState({ ...this.state, errorText: error.message });
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className={cls.ErrorPage}>
          <h1> Произошла ошибка: </h1> <p>{this.state.errorText}</p>
          <CustomLink to="/"> Домой </CustomLink>
        </div>
      );
    }

    return this.props.children;
  }
}
