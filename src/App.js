import MyCalendar from './components/MyCalendar';
import ProjectManagement from './components/ProjectManagement ';
import RecruitmentManagement from './components/RecruitmentManagement ';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DirectMessage from './pages/DirectMessage';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/calendar' element={<MyCalendar />} />
          <Route path='/project' element={<ProjectManagement />} />
          <Route path='/recruit' element={<RecruitmentManagement />} />
          <Route path='/direct' element={<DirectMessage />} />
        </Routes>
      </Router>

    </div>
  );
};

export default App;