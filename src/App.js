import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./components/Home";
import FreeList from "./components/FreeList";
import FreeDetail from "./components/FreeDetail";
import PjList from "./components/PjList";
import PjDetail from "./components/PjDetail";
import PjRegistration from "./components/PjRegistration";
import "./css/Layout.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/freelist" element={<FreeList />} />
          <Route path="/freedetail" element={<FreeDetail />} />
          <Route path="/pjlist" element={<PjList />} />
          <Route path="/pjdetail" element={<PjDetail />} />
          <Route path="/pjregistration" element={<PjRegistration />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
