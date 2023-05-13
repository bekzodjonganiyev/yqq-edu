import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";

import {
  AdminLayout,
  LoginRegister,
  ProtectedRoute,
  SkeletonPost,
} from "./components";
import {
  FourZeroFour,
  Dashboard,
  Mottos,
  News,
  Banner,
  Media,
  Photos,
  Faq,
  Partners,
  Vacancies
} from "./pages";

import { smallActions } from "./context";

function App() {
  return (
    <div
      className={`w-screen h-screen overflow-x-hidden flex flex-col`}
      onScroll={(e) => smallActions.handleScroll(e.currentTarget.scrollTop)}
    >
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route
            index
            element={
              <Suspense
                fallback={[...Array(10).keys()].map((i) => (
                  <SkeletonPost key={i} />
                ))}
              >
                <Dashboard />
              </Suspense>
            }
          />
          <Route
            path="news"
            element={
              <Suspense
                fallback={[...Array(10).keys()].map((i) => (
                  <SkeletonPost key={i} />
                ))}
              >
                <News />
              </Suspense>
            }
          />
          <Route
            path="vacancies"
            element={
              <Suspense
                fallback={[...Array(10).keys()].map((i) => (
                  <SkeletonPost key={i} />
                ))}
              >
                <Vacancies />
              </Suspense>
            }
          />
          <Route
            path="mottos"
            element={
              <Suspense
                fallback={[...Array(10).keys()].map((i) => (
                  <SkeletonPost key={i} />
                ))}
              >
                <Mottos />
              </Suspense>
            }
          />
          <Route
            path="banner"
            element={
              <Suspense
                fallback={[...Array(10).keys()].map((i) => (
                  <SkeletonPost key={i} />
                ))}
              >
                <Banner />
              </Suspense>
            }
          />
          <Route
            path="media"
            element={
              <Suspense
                fallback={[...Array(10).keys()].map((i) => (
                  <SkeletonPost key={i} />
                ))}
              >
                <Media />
              </Suspense>
            }
          />
          <Route
            path="photos"
            element={
              <Suspense
                fallback={[...Array(10).keys()].map((i) => (
                  <SkeletonPost key={i} />
                ))}
              >
                <Photos />
              </Suspense>
            }
          />
          <Route
            path="faq"
            element={
              <Suspense
                fallback={[...Array(10).keys()].map((i) => (
                  <SkeletonPost key={i} />
                ))}
              >
                <Faq />
              </Suspense>
            }
          />
          <Route
            path="partners"
            element={
              <Suspense
                fallback={[...Array(10).keys()].map((i) => (
                  <SkeletonPost key={i} />
                ))}
              >
                <Partners />
              </Suspense>
            }
          />
        </Route>
        <Route
          path="yft-login"
          element={
            <Suspense
              fallback={[...Array(10).keys()].map((i) => (
                <SkeletonPost key={i} />
              ))}
            >
              <LoginRegister />
            </Suspense>
          }
        />
        <Route
          path="404"
          element={
            <Suspense
              fallback={[...Array(10).keys()].map((i) => (
                <SkeletonPost key={i} />
              ))}
            >
              <FourZeroFour />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense
              fallback={[...Array(10).keys()].map((i) => (
                <SkeletonPost key={i} />
              ))}
            >
              <FourZeroFour />
            </Suspense>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
