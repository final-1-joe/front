import MyCalendar from './components/MyCalendar';
import ProjectManagement from './components/ProjectManagement ';
import RecruitmentManagement from './components/RecruitmentManagement ';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/calendar' element={<MyCalendar />} />
          <Route path='/project' element={<ProjectManagement />} />
          <Route path='/recruit' element={<RecruitmentManagement />} />
        </Routes>
      </Router>

    </div>
  );
};

export default App;