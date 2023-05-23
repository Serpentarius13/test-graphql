import { BrowserRouter, Route, Routes } from "react-router-dom";

import { routes } from "./routes";
import { Suspense } from "react";
import { LoadingScreen } from "@/shared/Loading";
import ClientLayout from "../Layout/ClientLayout";

export default function RouterClientProvider() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ClientLayout />}>
          {routes.map(({ path, element: Element, ...rest }) => (
            //@ts-expect-error Lazy loaded components error
            <Route
              key={path}
              element={
                <Suspense fallback={<LoadingScreen />}>
                  <Element />
                </Suspense>
              }
              path={path}
              {...rest}
            />
          ))}
        </Route>
      </Routes>{" "}
    </BrowserRouter>
  );
}
