import { lazy } from "react";

const FourZeroFour = lazy(() => import("./404/404.jsx"));
const Dashboard = lazy(() => import("./admin/dashboard/Dashboard"));
const News = lazy(() => import("./admin/news/News"));
const Vacancies = lazy(() => import("./admin/vacancies/Vacancies"));
const Mottos = lazy(() => import("./admin/mottos/Mottos"));
const Banner = lazy(() => import("./admin/banner/Banner"));
const Media = lazy(() => import("./admin/media/Media"));
const Photos = lazy(() => import("./admin/photos/Photos"));
const Faq = lazy(() => import("./admin/faq/Faq"));
const Partners = lazy(() => import("./admin/partners/Partners"));


export {
  FourZeroFour,
  Dashboard,
  News,
  Vacancies,
  Mottos,
  Banner,
  Media,
  Photos,
  Faq,
  Partners
};
