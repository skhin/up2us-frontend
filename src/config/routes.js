import { lazy } from "react";
import PrivateRoute from "./PrivateRoute";
import ProtectedRoute from "./ProtectedRoute";
import { Route } from "react-router-dom";

export const routes = {
  home: {
    name: "Home",
    path: "/",
    component: lazy(() => import("../pages/Home/Home")),
    type: Route,
  },
  aboutUs: {
    name: "AboutUs",
    path: "/aboutus",
    component: lazy(() => import("../components/AboutUs/AboutUs")),
    type: Route,
  },
  contactUs: {
    name: "ContactUs",
    path: "/contactus",
    component: lazy(() => import("../components/ContactUs/ContactUs")),
    type: Route,
  },

  login: {
    name: "Login",
    path: "/login",
    component: lazy(() => import("../pages/Login/LoginPage")),
    type: ProtectedRoute,
  },
  register: {
    name: "Register",
    path: "/register",
    component: lazy(() => import("../pages/Register/RegisterPage")),
    type: ProtectedRoute,
  },
  userSetting: {
    name: "UserSetting",
    path: "/usersetting",
    component: lazy(() => import("../pages/User/UserPage")),
    type: PrivateRoute,
  },
  question: {
    name: "QuestionPage",
    path: "/question",
    component: lazy(() => import("../pages/Question/QuestionPage")),
    type: PrivateRoute,
  },
  result: {
    name: "ResultPage",
    path: "/result",
    component: lazy(() => import("../pages/Result/ResultPage")),
    type: PrivateRoute,
  },
  dininghistory: {
    name: "DiningHistory",
    path: "/dininghistory",
    component: lazy(() => import("../pages/DiningHistory/DiningHistory")),
    type: PrivateRoute,
  },
  visitedlocation: {
    name: "VisitedLocation",
    path: "/visitedlocation",
    component: lazy(() => import("../pages/VisitedLocations/VisitedLocations")),
    type: PrivateRoute,
  },
  dietpreference: {
    name: "dietPreference",
    path: "/dietpreference",
    component: lazy(() => import("../pages/DietPreference/DietPreference")),
    type: PrivateRoute,
  },
  dietrestriction: {
    name: "dietrestriction",
    path: "/dietrestriction",
    component: lazy(() => import("../pages/DietRestriction/DietRestriction")),
    type: PrivateRoute,
  },
  favcuisine: {
    name: "favcuisine",
    path: "/favcuisine",
    component: lazy(() => import("../pages/FavCuisine/FavCuisine")),
    type: PrivateRoute,
  },
  nonfavcuisine: {
    name: "nonfavcuisine",
    path: "/nonfavcuisine",
    component: lazy(() => import("../pages/NonFavCuisine/NonFavCuisine")),
    type: PrivateRoute,
  },
  favestab: {
    name: "favestab",
    path: "/favestab",
    component: lazy(() => import("../pages/FavEstablishment/FavEstablishment")),
    type: PrivateRoute,
  },
  blacklist: {
    name: "blacklist",
    path: "/blacklist",
    component: lazy(() => import("../pages/Blacklist/Blacklist")),
    type: PrivateRoute,
  },
};

export const renderRoutes = Object.entries(routes);
