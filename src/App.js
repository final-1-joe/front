import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import FreeList from "./components/Freelancer/FreeList";
import FreeDetail from "./components/Freelancer/FreeDetail";
import PjList from "./components/Project/PjList";
import PjDetail from "./components/Project/PjDetail";
import PjRegistration from "./components/Project/PjRegistration";
import PjUpdate from "./components/Project/PjUpdate";
import "./css/Layout.css";
import MyCalendar from "./components/MyCalendar";
import ProjectManagement from "./components/ProjectManagement ";
import RecruitmentManagement from "./components/RecruitmentManagement ";
import DirectMessage from "./pages/DirectMessage";
import ClientMypage from "./pages/ClientMypage";
import FreeMypage from "./pages/FreeMypage";
import FreeMyInfo from "./components/my/FreeMyInfo";
import ClientMyInfo from "./components/my/ClientMyInfo";
import Resume from "./components/ResumeTag/Resume";
import SupportBoard from "./components/supportcenter/SupportBoard";
import SupportBoardWrite from "./components/supportcenter/SupportBoardWrite";
import SupportBoardDetail from "./components/supportcenter/SupportBoardDetail";
import SupportBoardModify from "./components/supportcenter/SupportBoardModify";
import SupportCenter from "./components/supportcenter/SupportCenter";
import Notfound from "./components/Notfound";
import TagConfigFree from "./components/ResumeTag/TagConfigFree";
import TagConfigClient from "./components/ResumeTag/TagConfigClient";
import ResumeMypage from "./components/ResumeTag/ResumeMypage";
import Loginform from "./components/Login/Loginform";
import Loginselect from "./components/Login/Loginselect";
import Registerform_1 from "./components/Login/Registerform_1";
import Registerform_2 from "./components/Login/Registerform_2";

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
            <Route path="/pjdetail/update" element={<PjUpdate />} />
            <Route path="/pjregistration" element={<PjRegistration />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/resumemypage" element={<ResumeMypage />} />
            <Route path="/tag" element={<TagConfigFree />} />
            <Route path="/tag2" element={<TagConfigClient />} />
            <Route path="/loginform" element={<Loginform />} />
            <Route path="/loginselect" element={<Loginselect />} />
            <Route path="/registerform_1" element={<Registerform_1 />} />
            <Route path="/registerform_2" element={<Registerform_2 />} />
            <Route path="/support" element={<SupportCenter />} />
            <Route path="/support/board" element={<SupportBoard />} />
            <Route
              path="/support/board/write"
              element={<SupportBoardWrite />}
            />
            <Route
              path="/support/board/detail/:id"
              element={<SupportBoardDetail />}
            />
            <Route
              path="/support/board/modify"
              element={<SupportBoardModify />}
            />
          </Route>
          <Route path="/calendar" element={<MyCalendar />} />
          <Route path="/project" element={<ProjectManagement />} />
          <Route path="/recruit" element={<RecruitmentManagement />} />
          <Route path="/direct" element={<DirectMessage />} />
          <Route path="/clientmypage" element={<ClientMypage />} />
          <Route path="/freemypage" element={<FreeMypage />} />
          <Route path="/freemyinfo" element={<FreeMyInfo />} />
          <Route path="/clientmyinfo" element={<ClientMyInfo />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
