import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";

import App from "./App";
import { UsersProvider } from "./context";
import { Loader, SkeletonPost } from "./components";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UsersProvider>
      <BrowserRouter>
        <Suspense
          fallback={[...Array(10).keys()].map((i) => (
            <SkeletonPost key={i} />
          ))}
        >
          <App />
        </Suspense>
      </BrowserRouter>
    </UsersProvider>
  </React.StrictMode>
);
