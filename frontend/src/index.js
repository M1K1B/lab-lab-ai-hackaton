import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Home, Andjelika } from "./pages";
import Header from "./components/Header/Header";

ReactDOM.render(
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/andjelika" element={<Andjelika />} />
    </Routes>
  </Router>,

  document.getElementById("root")
);

serviceWorker.unregister();
