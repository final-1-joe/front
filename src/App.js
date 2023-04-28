import React from "react";
import { Route, Routes } from "react-router-dom";
import Notfound from "./components/Notfound";
import Layout from "./Layout";
import Resume from "./components/ksm/Resume";
import SupportBoard from "./components/supportcenter/SupportBoard";
import SupportBoardWrite from "./components/supportcenter/SupportBoardWrite";
import SupportBoardDetail from "./components/supportcenter/SupportBoardDetail";
import SupportBoardModify from "./components/supportcenter/SupportBoardModify";
import SupportCenter from "./components/supportcenter/SupportCenter";
//import Test from "./components/ksm/Test";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Resume />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/support" element={<SupportCenter />} />
        <Route path="/support/supportboard" element={<SupportBoard />} />
        <Route
          path="/support/supportboard/write"
          element={<SupportBoardWrite />}
        />
        <Route
          path="/support/supportboard/detail"
          element={<SupportBoardDetail />}
        />
        <Route
          path="/support/supportboard/modify"
          element={<SupportBoardModify />}
        />
        <Route path="*" element={<Notfound />} />
      </Route>
    </Routes>
  );
}

export default App;
