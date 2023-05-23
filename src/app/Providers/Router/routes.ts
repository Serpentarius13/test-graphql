import type { RouteObject } from "react-router-dom";

import { lazy } from "react";

const Home = lazy(() => import("@/pages/Home.tsx"));
const Repository = lazy(() => import("@/pages/Repository.tsx"));

const NotFound = lazy(() => import('@/pages/NotFound'))

export const routes = [
  {
    path: "/",
    element: Home,
  },

  {
    path: "/repository/:id",
    element: Repository,
  },

  {
    path: '*',
    element: NotFound
  }
];
