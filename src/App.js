import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import FreeList from "./components/Freelancer/FreeList";
import FreeDetail from "./components/Freelancer/FreeDetail";
import PjList from "./components/Project/PjList";
import PjDetail from "./components/Project/PjDetail";
import PjRegistration from "./components/Project/PjRegistration";
import "./css/Layout.css";
import MyCalendar from "./components/MyCalendar";
import ProjectManagement from "./components/ProjectManagement ";
import RecruitmentManagement from "./components/RecruitmentManagement ";
import DirectMessage from "./pages/DirectMessage";
import ClientMypage from "./pages/ClientMypage";
import FreeMypage from "./pages/FreeMypage";
import FreeMyInfo from "./components/my/FreeMyInfo";
import ClientMyInfo from "./components/my/ClientMyInfo";
import Resume from "./components/ksm/Resume";
import SupportBoard from "./components/supportcenter/SupportBoard";
import SupportBoardWrite from "./components/supportcenter/SupportBoardWrite";
import SupportBoardDetail from "./components/supportcenter/SupportBoardDetail";
import SupportBoardModify from "./components/supportcenter/SupportBoardModify";
import SupportCenter from "./components/supportcenter/SupportCenter";
import Notfound from "./components/Notfound";
import FreeMyProject from "./components/my/FreeMyProject";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/freelist" element={<FreeList />} />
            <Route path="/freedetail" element={<FreeDetail />} />
            <Route path="/pjlist" element={<PjList />} />
            <Route path="/pjdetail" element={<PjDetail />} />
            <Route path="/pjregistration" element={<PjRegistration />} />
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
          </Route>
          <Route path="/calendar" element={<MyCalendar />} />
          <Route path="/project" element={<ProjectManagement />} />
          <Route path="/recruit" element={<RecruitmentManagement />} />
          <Route path="/direct" element={<DirectMessage />} />
          <Route path="/client/mypage" element={<ClientMypage />} />
          <Route path="/client/myinfo" element={<ClientMyInfo />} />

          <Route path="/free/mypage" element={<FreeMypage />} />
          <Route path="/free/myinfo" element={<FreeMyInfo />} />
          <Route path="/free/myproject" element={<FreeMyProject />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
