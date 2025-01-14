import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/NotFound';
import Calendar from './pages/Calendar';
import Events from './pages/Events';
import Files from './pages/Files';
import Profile from './pages/Profile';
import Gallery from './pages/Gallery';
import Exams from './pages/Exams';
import StudentDashboard from './pages/dashboards/StudentDashboard';
import TeacherDashboard from './pages/dashboards/TeacherDashboard';
import AdminDashboard from './pages/dashboards/AdminDashboard';

function App() {
  // This would normally come from your auth system
  const userRole = 'student'; // or 'teacher' or 'admin'

  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        {/* Protected routes wrapped in MainLayout */}
        <Route element={<MainLayout userRole={userRole} />}>
          <Route path="/dashboard/student" element={<StudentDashboard />} />
          <Route path="/dashboard/teacher" element={<TeacherDashboard />} />
          <Route path="/dashboard/admin" element={<AdminDashboard />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/events" element={<Events />} />
          <Route path="/files" element={<Files />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/exams" element={<Exams />} />
        </Route>

        {/* 404 route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App; // Asegúrate de que esta línea esté presente
