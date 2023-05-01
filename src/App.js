
import MyCalendar from './components/MyCalendar';
import ProjectManagement from './components/ProjectManagement ';
import RecruitmentManagement from './components/RecruitmentManagement ';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DirectMessage from './pages/DirectMessage';
import ClientMypage from './pages/ClientMypage';
import FreeMypage from './pages/FreeMypage';
import FreeMyInfo from './components/my/FreeMyInfo';
import ClientMyInfo from './components/my/ClientMyInfo'
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
          </Route>
          <Route path='/calendar' element={<MyCalendar />} />
          <Route path='/project' element={<ProjectManagement />} />
          <Route path='/recruit' element={<RecruitmentManagement />} />
          <Route path='/direct' element={<DirectMessage />} />
          <Route path='/clientmypage' element={<ClientMypage />} />
          <Route path='/freemypage' element={<FreeMypage />} />
          <Route path='/freemyinfo' element={<FreeMyInfo />} />
          <Route path='/clientmyinfo' element={<ClientMyInfo />} />
        </Routes>
      </Router>

    </div>
  );
};

export default App;