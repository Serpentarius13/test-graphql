import type { RouteObject } from "react-router-dom";

import { lazy } from "react";

const Home = lazy(() => import("@/pages/Home.tsx"));
const Repository = lazy(() => import("@/pages/Repository.tsx"));

export const routes = [
  {
    path: "/",
    element: Home,
  },

  {
    path: "/repository/:id",
    element: Repository,
  },
];
