import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import MyCalendar from './components/MyCalendar';
import ManagementForm from './components/ManagementForm';
import ProjectManagement from './components/ProjectManagement ';
import RecruitmentManagement from './components/RecruitmentManagement ';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      {/* <MyCalendar /> */}
      {/* <ManagementForm /> */}
      <Router>
        <Routes>
          <Route path='/' element={<ProjectManagement />} />
          <Route path='/1' element={<RecruitmentManagement />} />
        </Routes>
      </Router>

    </div>
  );
};

export default App;