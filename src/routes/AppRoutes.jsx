import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import BackOfficePage from '../pages/bo/BackOfficePage';
import LoginPage from '../pages/bo/LoginPage';
import HomePage from '../pages/client/HomePage';
import { isAuthenticated } from '../services/authService';

const PrivateRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/login" />;
};

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/backoffice"
        element={
          <PrivateRoute>
            <BackOfficePage />
          </PrivateRoute>
        }
      />
    </Routes>
  </Router>
);

export default AppRoutes;
