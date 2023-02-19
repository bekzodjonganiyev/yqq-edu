import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";

import App from "./App";
import { UsersProvider } from "./context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UsersProvider>
      <BrowserRouter>
        <Suspense fallback={<h1>Loading...</h1>}>
          <App />
        </Suspense>
      </BrowserRouter>
    </UsersProvider>
  </React.StrictMode>
);
