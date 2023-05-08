import { lazy } from "react";

const FourZeroFour = lazy(() => import("./404/404.jsx"));
const Dashboard = lazy(() => import("./admin/dashboard/Dashboard"));
const News = lazy(() => import("./admin/news/News"));
const Users = lazy(() => import("./admin/users/Users"));
const Banner = lazy(() => import("./admin/banner/Banner"));
const Media = lazy(() => import("./admin/media/Media"));
const Photos = lazy(() => import("./admin/photos/Photos"));

export {
  FourZeroFour,
  Dashboard,
  News,
  Users,
  Banner,
  Media,
  Photos
};
