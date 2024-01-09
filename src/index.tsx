import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import ListPage from "./container/pages/ListPage";
import DetailsPage from "./container/pages/ DetailsPage";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListPage />} />
        <Route path="/detailsPage" element={<DetailsPage />} />
        {/* 他のルートを追加する場合はここに追加 */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
