import { lazy } from "react";

const Home = lazy(() => import("./home/Home")) ;
const LatestNews = lazy(() => import("./latest_news/LatestNews"));

export {Home, LatestNews}