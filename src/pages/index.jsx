import { lazy } from "react";

const Home = lazy(() => import("./home/Home"));
const LatestNews = lazy(() => import("./latest_news/LatestNews"));
const ActualNews = lazy(() => import("./actual_news/ActualNews"));
const VideoNews = lazy(() => import("./video_news/VideoNews"));
const PhotoNews = lazy(() => import("./photo_news/PhotoNews"));
const FourZeroFour = lazy(() => import("./404/404.jsx"));
const News = lazy(() => import("./admin/news/News"));
const Users = lazy(() => import("./admin/users/Users"));
const Dashboard = lazy(() => import("./admin/dashboard/Dashboard"));

export {
  Home,
  LatestNews,
  ActualNews,
  VideoNews,
  PhotoNews,
  FourZeroFour,
  News,
  Users,
  Dashboard,
};
