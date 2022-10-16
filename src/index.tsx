import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { About } from "./layouts/About/About";
import { Art } from "./layouts/Art/Art";
import { FrontEnd } from "./layouts/FrontEnd/FrontEnd";
import { Home } from "./layouts/Home/Home";
import { UiUx } from "./layouts/UiUx/UiUx";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home />} />
      <Route path="front-end" element={<FrontEnd />} />
      <Route path="ui-ux" element={<UiUx />} />
      <Route path="art" element={<Art />} />
      <Route path="about" element={<About />} />
    </Route>
  )
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
