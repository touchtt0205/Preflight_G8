import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./Upload";
import Gallery from "./Gallery";
import "bootstrap/dist/css/bootstrap.min.css";
import Creator from "./Creator";
import Instructor from "./Instructor";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Gallery />} />
        <Route path="/upload" element={<App />} />
        <Route path="/creator" element={<Creator />} />
        <Route path="/instructor" element={<Instructor />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
