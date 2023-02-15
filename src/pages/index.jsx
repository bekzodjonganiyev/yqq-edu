import { lazy } from "react";

import { lazyImport } from "../utils/lazyImport";

const Home = lazy(() => import("./home/Home")) ;
// const LatestNews = lazy(() => import("./latest_news/LatestNews"));
const LatestNews = lazyImport("../pages/latest_news/LatestNews");

export {Home, LatestNews}