import { BrowserRouter, Route, Routes } from "react-router-dom";

import { routes } from "./routes";
import { Suspense } from "react";
import { LoadingScreen } from "@/shared/Loading";

export default function RouterClientProvider() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({ path, element: Element, ...rest }) => (
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
      </Routes>{" "}
    </BrowserRouter>
  );
}
