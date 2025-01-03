import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import ProtectedRoutes from './components/ProtectedRoutes';
import InstructorDashboard from './pages/InstructorPage/InstructorDashboard';
import StudentHome from './pages/StudentPage/StudentHome';

const App = () => {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="">
      <Routes>
        <Route path="/login" element={token && user ? <Navigate to="/" /> : <Login />} />
        <Route path="/" element={<ProtectedRoutes element={<Home />} />} />
        <Route path="/instructor" element={<ProtectedRoutes element={<InstructorDashboard />} />} />
        <Route path="/student" element={<ProtectedRoutes element={<StudentHome />} />} />
        {/* Add more protected routes as needed */}
      </Routes>
    </div>
  );
}

export default App;