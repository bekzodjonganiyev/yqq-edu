import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";

import { Layout } from "./components";
import { Home, LatestNews } from "./pages";

import { useAppContext } from "./context/app.context";

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
