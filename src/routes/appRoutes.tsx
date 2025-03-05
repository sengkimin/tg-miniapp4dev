import { JSX } from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import FitnessLandingPage from "../pages/Home";
import Promotion from "../pages/Promotion"
import Detail from "../pages/DetailPromotion"

import BranchesPage from "../pages/pageBranch";
import MembershipPlan from "../pages/membershipPlan";
import Coupons from "../pages/couPons";

export interface AppRoute {
  path?: string;
  element: JSX.Element;
  errorElement?: JSX.Element;
  children?: AppRoute[];
}

export const webRoutes = {
  home: "/",
  branch :"/branch",
  coupons : "/Coupon"
  promotion: "/promotion",
  gymPromotion: "/detail",
  membership: "/membership"
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
      { path: webRoutes.promotion, element: <Promotion /> },
      { path: webRoutes.gymPromotion, element: <Detail /> },
      { path: webRoutes.home, element: <ProfilePage /> },
      { path: webRoutes.branch, element: <BranchesPage /> },
      { path: webRoutes.membership, element: <MembershipPlan /> },
      // { path: webRoutes.discover, element: <DiscoverPage /> },
      { path: webRoutes.coupons, element: <Coupons /> },

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
