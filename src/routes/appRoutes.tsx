import { JSX } from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import FitnessLandingPage from "../pages/Home";
import Promotion from "../pages/Promotion"
import Detail from "../pages/DetailPromotion"


export interface AppRoute {
  path?: string;
  element: JSX.Element;
  errorElement?: JSX.Element;
  children?: AppRoute[];
}

export const webRoutes = {
  home: "/",
  promotion: "/promotion",
  gymPromotion: "/detail",
  // discover: "/discover",
};

const errorElement = (
  <div className="flex items-center justify-center h-screen">
    Sorry, something went wrong
  </div>
);

const appRoutes: AppRoute[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: webRoutes.home, element: <FitnessLandingPage /> },
      { path: webRoutes.promotion, element: <Promotion /> },
      { path: webRoutes.gymPromotion, element: <Detail /> },
      // { path: webRoutes.discover, element: <DiscoverPage /> },
    ],
  },
  {
    path: "*",
    element: <div>NotFoundPage</div>,
    errorElement: errorElement,
  },
];

const router = createBrowserRouter(appRoutes);

export default router;
