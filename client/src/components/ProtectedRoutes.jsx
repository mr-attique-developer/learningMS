import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';

const ProtectedRoutes = ({ element }) => {
  const location = useLocation();
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user || !token) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  if (user?.role !== "instructor" && location.pathname.includes("instructor")) {
    return <Navigate to="/" />;
  }

  if (user?.role === "instructor" && !location.pathname.includes("instructor")) {
    return <Navigate to="/instructor" />;
  }

  return element;
};

export default ProtectedRoutes;