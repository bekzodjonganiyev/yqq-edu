import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

import { useAppContext } from "./context/app.context";
import { lazyImport } from "./utils/lazyImport";

// const Layout = lazyImport("../components", "Layout")
// const Home = lazyImport("../pages", "Home")
// const LatestNews = lazyImport("../pages", "LatestNews")

import { Layout } from "./components";
import { Home, LatestNews } from "./pages";

// const Layout = lazy(() => import("./components"));
// const Home = lazy(() => import("./pages"));
// const LatestNews = lazy(() => import("./pages/latest_news/LatestNews"))

function App() {
  const { setScrolValue } = useAppContext();
  const handleScroll = (event) => {
    setScrolValue(event.currentTarget.scrollTop);
  };

  return (
    <div
      className={`w-screen h-screen bg-no-repeat bg-cover bg-top bg-fixed overflow-x-hidden`}
      onScroll={handleScroll}
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="latest-news"
            element={
              <Suspense fallback={<h1 className="pt-96">Loading...</h1>}>
                <LatestNews />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
