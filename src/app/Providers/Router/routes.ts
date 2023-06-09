import { lazy } from "react";
import { RouteObject } from "react-router-dom";

const Home = lazy(() => import("@/pages/Home.tsx"));
const Repository = lazy(() => import("@/pages/Repository/ui/Repository"));

const NotFound = lazy(() => import("@/pages/NotFound"));

type TRoute = Omit<RouteObject, "element"> & {
  element: ReturnType<typeof lazy>;
  children?: ReturnType<typeof lazy>;
};

export const routes: TRoute[] = [
  {
    path: "/",
    element: Home,
    index: true,
  },

  {
    path: "/repository/:namespace",
    element: Repository,
  },

  {
    path: "*",
    element: NotFound,
  },
];
